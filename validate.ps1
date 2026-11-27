param(
  [switch]$Quiet
)

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
if (-not $root) { $root = (Get-Location).Path }
Push-Location $root

$failures = New-Object System.Collections.Generic.List[string]
function Add-Fail([string]$msg) {
  $script:failures.Add($msg)
  Write-Host "FAIL: $msg" -ForegroundColor Red
}
function Add-Pass([string]$msg) {
  if (-not $Quiet) {
    Write-Host "PASS: $msg" -ForegroundColor Green
  }
}

Add-Type -Language CSharp -TypeDefinition @'
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Text.RegularExpressions;

public static class JsInDepthValidator {
    private static int SkipString(string s, int i, char quote) {
        i++;
        while (i < s.Length) {
            char c = s[i];
            if (c == '\\') { i += 2; continue; }
            if (c == quote) return i + 1;
            i++;
        }
        return i;
    }

    private static int SkipTemplate(string s, int i) {
        i++;
        while (i < s.Length) {
            char c = s[i];
            if (c == '\\') { i += 2; continue; }
            if (c == (char)96) return i + 1;
            if (c == '$' && i + 1 < s.Length && s[i + 1] == '{') {
                i = SkipBalanced(s, i + 1, '{', '}');
                continue;
            }
            i++;
        }
        return i;
    }

    private static int SkipWsComments(string s, int i) {
        while (i < s.Length) {
            char c = s[i];
            if (char.IsWhiteSpace(c)) { i++; continue; }
            if (c == '/' && i + 1 < s.Length && s[i + 1] == '/') {
                i += 2;
                while (i < s.Length && s[i] != '\n') i++;
                continue;
            }
            if (c == '/' && i + 1 < s.Length && s[i + 1] == '*') {
                i += 2;
                while (i + 1 < s.Length && !(s[i] == '*' && s[i + 1] == '/')) i++;
                i = Math.Min(s.Length, i + 2);
                continue;
            }
            break;
        }
        return i;
    }

    private static int SkipBalanced(string s, int i, char openCh, char closeCh) {
        int depth = 0;
        while (i < s.Length) {
            char c = s[i];
            if (c == '\'' || c == '"') { i = SkipString(s, i, c); continue; }
            if (c == (char)96) { i = SkipTemplate(s, i); continue; }
            if (c == '/' && i + 1 < s.Length && (s[i + 1] == '/' || s[i + 1] == '*')) {
                i = SkipWsComments(s, i);
                continue;
            }
            if (c == openCh) depth++;
            else if (c == closeCh) {
                depth--;
                if (depth == 0) return i + 1;
            }
            i++;
        }
        return i;
    }

    private static Dictionary<string, string> ParseObj(string objLiteral) {
        var dict = new Dictionary<string, string>(StringComparer.Ordinal);
        if (string.IsNullOrWhiteSpace(objLiteral)) return dict;
        int openBrace = objLiteral.IndexOf('{');
        if (openBrace < 0) return dict;
        int endBrace = SkipBalanced(objLiteral, openBrace, '{', '}');
        int i = openBrace + 1;
        while (i < endBrace - 1) {
            i = SkipWsComments(objLiteral, i);
            if (i >= endBrace - 1) break;
            if (objLiteral[i] == ',') { i++; continue; }
            string key;
            if (objLiteral[i] == '\'' || objLiteral[i] == '"') {
                int next = SkipString(objLiteral, i, objLiteral[i]);
                key = objLiteral.Substring(i + 1, next - i - 2);
                i = next;
            } else {
                int start = i;
                while (i < endBrace - 1 && (char.IsLetterOrDigit(objLiteral[i]) || objLiteral[i] == '_' || objLiteral[i] == '$')) i++;
                key = objLiteral.Substring(start, i - start);
            }
            i = SkipWsComments(objLiteral, i);
            if (i >= endBrace - 1 || objLiteral[i] != ':') { i++; continue; }
            i = SkipWsComments(objLiteral, i + 1);
            int valStart = i;
            if (objLiteral[i] == '{') i = SkipBalanced(objLiteral, i, '{', '}');
            else if (objLiteral[i] == '[') i = SkipBalanced(objLiteral, i, '[', ']');
            else if (objLiteral[i] == '\'' || objLiteral[i] == '"') i = SkipString(objLiteral, i, objLiteral[i]);
            else if (objLiteral[i] == (char)96) i = SkipTemplate(objLiteral, i);
            else {
                while (i < endBrace - 1 && objLiteral[i] != ',' && objLiteral[i] != '\n' && objLiteral[i] != '\r') {
                    if (objLiteral[i] == '/' && i + 1 < endBrace - 1 && (objLiteral[i + 1] == '/' || objLiteral[i + 1] == '*')) break;
                    i++;
                }
            }
            dict[key] = objLiteral.Substring(valStart, i - valStart).Trim();
        }
        return dict;
    }

    private static List<string> ParseArrayItems(string arrayLiteral) {
        var list = new List<string>();
        if (string.IsNullOrWhiteSpace(arrayLiteral)) return list;
        int open = arrayLiteral.IndexOf('[');
        if (open < 0) return list;
        int end = SkipBalanced(arrayLiteral, open, '[', ']');
        int i = open + 1;
        while (i < end - 1) {
            i = SkipWsComments(arrayLiteral, i);
            if (i >= end - 1) break;
            if (arrayLiteral[i] == ',') { i++; continue; }
            int valStart = i;
            if (arrayLiteral[i] == '{') i = SkipBalanced(arrayLiteral, i, '{', '}');
            else if (arrayLiteral[i] == '[') i = SkipBalanced(arrayLiteral, i, '[', ']');
            else if (arrayLiteral[i] == '\'' || arrayLiteral[i] == '"') i = SkipString(arrayLiteral, i, arrayLiteral[i]);
            else if (arrayLiteral[i] == (char)96) i = SkipTemplate(arrayLiteral, i);
            else {
                while (i < end - 1 && arrayLiteral[i] != ',') i++;
            }
            list.Add(arrayLiteral.Substring(valStart, i - valStart).Trim());
        }
        return list;
    }

    private static void CheckLangs(Dictionary<string, string> obj, string ctx, List<string> errs) {
        foreach (string lang in new[] { "en", "de", "ru" }) {
            if (!obj.ContainsKey(lang) || string.IsNullOrWhiteSpace(obj[lang])) {
                errs.Add(ctx + " missing language '" + lang + "'");
            }
        }
    }

    public static List<string> Check(string carSource, string cid) {
        var errs = new List<string>();
        int idx = carSource.IndexOf("registerAutoDuelVehicle", StringComparison.Ordinal);
        if (idx < 0) { errs.Add(cid + ": missing registerAutoDuelVehicle call"); return errs; }
        int open = carSource.IndexOf('{', idx);
        int end = SkipBalanced(carSource, open, '{', '}');
        var top = ParseObj(carSource.Substring(open, end - open));

        if (!top.ContainsKey("inDepth") || top["inDepth"] == "null" || !top["inDepth"].StartsWith("{")) {
            errs.Add(cid + ": missing or null inDepth block");
            return errs;
        }

        var roster = ParseObj(top["roster"]);
        var engineObjs = ParseArrayItems(roster.ContainsKey("engines") ? roster["engines"] : "");
        var inDepth = ParseObj(top["inDepth"]);
        var engineCosts = ParseObj(inDepth.ContainsKey("engineCosts") ? inDepth["engineCosts"] : "");
        var groups = ParseObj(inDepth.ContainsKey("groups") ? inDepth["groups"] : "");

        var knownEngineIds = new HashSet<string>(StringComparer.Ordinal);
        foreach (string eo in engineObjs) {
            var ep = ParseObj(eo);
            string eid = ep.ContainsKey("id") ? ep["id"].Trim('\'', '"') : "";
            if (!string.IsNullOrEmpty(eid)) knownEngineIds.Add(eid);
            if (string.IsNullOrEmpty(eid) || !engineCosts.ContainsKey(eid)) {
                errs.Add(cid + ": engine '" + eid + "' missing from inDepth.engineCosts");
                continue;
            }
            var ec = ParseObj(engineCosts[eid]);
            string gk = ec.ContainsKey("group") ? ec["group"].Trim('\'', '"') : "";
            if (string.IsNullOrEmpty(gk) || !groups.ContainsKey(gk)) {
                errs.Add(cid + ": engine '" + eid + "' references unknown group '" + gk + "'");
            }
        }
        foreach (string ecKey in engineCosts.Keys) {
            if (!knownEngineIds.Contains(ecKey)) {
                errs.Add(cid + ": inDepth.engineCosts has orphan key '" + ecKey + "' not in roster.engines[]");
            }
        }

        if (groups.Count == 0) errs.Add(cid + ": inDepth.groups is empty");
        foreach (var kv in groups) {
            var g = ParseObj(kv.Value);
            foreach (string req in new[] { "stats", "extendedChecks", "savingsNote", "market", "watchoutExtra" }) {
                if (!g.ContainsKey(req)) errs.Add(cid + ": groups." + kv.Key + " missing '" + req + "'");
            }
            if (g.ContainsKey("stats")) CheckLangs(ParseObj(g["stats"]), cid + ".groups." + kv.Key + ".stats", errs);
            if (g.ContainsKey("extendedChecks")) CheckLangs(ParseObj(g["extendedChecks"]), cid + ".groups." + kv.Key + ".extendedChecks", errs);
            if (g.ContainsKey("savingsNote")) CheckLangs(ParseObj(g["savingsNote"]), cid + ".groups." + kv.Key + ".savingsNote", errs);
            if (g.ContainsKey("watchoutExtra")) CheckLangs(ParseObj(g["watchoutExtra"]), cid + ".groups." + kv.Key + ".watchoutExtra", errs);
            if (g.ContainsKey("market")) {
                var mkt = ParseObj(g["market"]);
                foreach (string mk in new[] { "supplyDemand", "sweetSpot", "outlook3to5yr" }) {
                    if (!mkt.ContainsKey(mk)) errs.Add(cid + ": groups." + kv.Key + ".market missing '" + mk + "'");
                    else CheckLangs(ParseObj(mkt[mk]), cid + ".groups." + kv.Key + ".market." + mk, errs);
                }
            }
        }

        if (!inDepth.ContainsKey("trimsData")) { errs.Add(cid + ": missing trimsData"); return errs; }
        var td = ParseObj(inDepth["trimsData"]);
        var trims = ParseArrayItems(td.ContainsKey("trims") ? td["trims"] : "");
        if (trims.Count < 2 || trims.Count > 12) errs.Add(cid + ": trims length " + trims.Count + " out of 2..12 range");
        int sweetSpotCount = 0;
        for (int t = 0; t < trims.Count; t++) {
            var trObj = ParseObj(trims[t]);
            foreach (string reqTr in new[] { "id", "tier", "name", "delta", "summary", "highlights" }) {
                if (!trObj.ContainsKey(reqTr)) errs.Add(cid + ": trim[" + t + "] missing '" + reqTr + "'");
            }
            if (trObj.ContainsKey("isSweetSpot") && trObj["isSweetSpot"].Trim() == "true") sweetSpotCount++;
            if (trObj.ContainsKey("priceDelta")) errs.Add(cid + ": trim[" + t + "] uses legacy 'priceDelta' (use 'delta')");
            if (trObj.ContainsKey("sweetSpot")) errs.Add(cid + ": trim[" + t + "] uses legacy 'sweetSpot' (use 'isSweetSpot')");
            if (trObj.ContainsKey("tier") && System.Text.RegularExpressions.Regex.IsMatch(trObj["tier"], @"\b(Challenger|Grandmaster|Master)\b", System.Text.RegularExpressions.RegexOptions.IgnoreCase)) {
                errs.Add(cid + ": trim[" + t + "] tier uses gaming rank name");
            }
            if (trObj.ContainsKey("tierClass")) {
                string tc = Unquote(trObj["tierClass"]);
                if (!System.Text.RegularExpressions.Regex.IsMatch(tc, @"^(tier-(10|[1-9])|tier-(bronze|silver|gold|diamond))$")) {
                    errs.Add(cid + ": trim[" + t + "] invalid tierClass '" + tc + "'");
                }
            }
        }
        if (sweetSpotCount != 1) errs.Add(cid + ": trimsData.trims must mark exactly 1 trim with isSweetSpot: true (found " + sweetSpotCount + ")");
        var matrix = ParseArrayItems(td.ContainsKey("matrix") ? td["matrix"] : "");
        if (matrix.Count < 6) errs.Add(cid + ": matrix has fewer than 6 rows (" + matrix.Count + ")");
        for (int r = 0; r < matrix.Count; r++) {
            var row = ParseObj(matrix[r]);
            var vals = ParseArrayItems(row.ContainsKey("vals") ? row["vals"] : "");
            if (vals.Count != trims.Count) {
                errs.Add(cid + ": matrix row " + r + " vals count (" + vals.Count + ") != trims count (" + trims.Count + ")");
            }
            for (int v = 0; v < vals.Count; v++) {
                string vc = Unquote(vals[v]);
                if (vc != "std" && vc != "opt" && vc != "no") {
                    errs.Add(cid + ": matrix row " + r + " val[" + v + "] invalid '" + vc + "' (must be std|opt|no)");
                }
            }
        }
        if (!td.ContainsKey("interiorNotes")) errs.Add(cid + ": trimsData missing interiorNotes");
        else CheckLangs(ParseObj(td["interiorNotes"]), cid + ".trimsData.interiorNotes", errs);
        if (!td.ContainsKey("cabinByPowertrain") || ParseObj(td["cabinByPowertrain"]).Count == 0) {
            errs.Add(cid + ": trimsData missing cabinByPowertrain");
        }
        if (!td.ContainsKey("faceliftUpgrades")) errs.Add(cid + ": trimsData missing faceliftUpgrades");
        else CheckLangs(ParseObj(td["faceliftUpgrades"]), cid + ".trimsData.faceliftUpgrades", errs);

        return errs;
    }

    private static string Unquote(string s) {
        if (string.IsNullOrEmpty(s)) return "";
        s = s.Trim();
        if (s.Length >= 2 && ((s[0] == '\'' && s[s.Length - 1] == '\'') || (s[0] == '"' && s[s.Length - 1] == '"'))) {
            return s.Substring(1, s.Length - 2);
        }
        return s;
    }

    public static string EnginesDir = "";

    private static string BuildObj(Dictionary<string, string> map) {
        var parts = new List<string>();
        foreach (var kv in map) parts.Add(kv.Key + ": " + kv.Value);
        return "{ " + string.Join(", ", parts.ToArray()) + " }";
    }

    public static string LoadEngineLibSource(string refId) {
        if (string.IsNullOrEmpty(EnginesDir) || string.IsNullOrEmpty(refId)) return null;
        string p = System.IO.Path.Combine(EnginesDir, refId + ".js");
        if (!System.IO.File.Exists(p)) return null;
        return System.IO.File.ReadAllText(p, System.Text.Encoding.UTF8);
    }

    public static Dictionary<string, string> ParseEngineLib(string src) {
        int idx = src.IndexOf("registerAutoDuelEngine", StringComparison.Ordinal);
        if (idx < 0) return null;
        int open = src.IndexOf('{', idx);
        if (open < 0) return null;
        int end = SkipBalanced(src, open, '{', '}');
        var top = ParseObj(src.Substring(open, end - open));
        if (!top.ContainsKey("definition")) return null;
        var def = ParseObj(top["definition"]);
        if (!def.ContainsKey("engines")) return null;
        var items = ParseArrayItems(def["engines"]);
        if (items.Count == 0) return null;
        return ParseObj(items[0]);
    }

    public static int CountFullCarSchemaChecks = 0;

    public static List<string> CheckFullCarSchema(
        string carSource,
        string cid,
        string[] specRowKeys,
        string[] subStatKeys,
        HashSet<string> validAtTokens,
        HashSet<string> validTechKeys,
        HashSet<string> globalBuyerFitKeys,
        Dictionary<string, string> numberOwners,
        Dictionary<int, string> gridOrderOwners
    ) {
        var errs = new List<string>();
        int idx = carSource.IndexOf("registerAutoDuelVehicle", StringComparison.Ordinal);
        if (idx < 0) return errs;
        int open = carSource.IndexOf('{', idx);
        int end = SkipBalanced(carSource, open, '{', '}');
        var top = ParseObj(carSource.Substring(open, end - open));
        if (!top.ContainsKey("roster")) return errs;
        var roster = ParseObj(top["roster"]);

        // 1. Roster metadata & uniqueness
        string numVal = roster.ContainsKey("number") ? Unquote(roster["number"]) : "";
        if (!Regex.IsMatch(numVal, "^\\d{2,3}$")) {
            errs.Add(cid + ": invalid roster.number '" + numVal + "'");
        } else if (numberOwners.ContainsKey(numVal)) {
            errs.Add(cid + ": duplicate roster.number '" + numVal + "' (already used by " + numberOwners[numVal] + ")");
        } else {
            numberOwners[numVal] = cid;
        }

        int gridOrd;
        if (!roster.ContainsKey("gridOrder") || !int.TryParse(roster["gridOrder"].Trim(), out gridOrd) || gridOrd <= 0) {
            errs.Add(cid + ": invalid roster.gridOrder");
        } else if (gridOrderOwners.ContainsKey(gridOrd)) {
            errs.Add(cid + ": duplicate roster.gridOrder " + gridOrd + " (already used by " + gridOrderOwners[gridOrd] + ")");
        } else {
            gridOrderOwners[gridOrd] = cid;
        }

        string carType = roster.ContainsKey("carType") ? Unquote(roster["carType"]) : "";
        var allowedTypes = new HashSet<string>(new[] { "subcompact", "hatchback", "hot-hatch", "sedan", "suv" });
        if (!allowedTypes.Contains(carType)) errs.Add(cid + ": invalid carType '" + carType + "'");

        string drive = roster.ContainsKey("drivetrain") ? Unquote(roster["drivetrain"]) : "";
        var allowedDrives = new HashSet<string>(new[] { "FWD", "RWD", "AWD" });
        if (!allowedDrives.Contains(drive)) errs.Add(cid + ": invalid roster.drivetrain '" + drive + "'");

        var sharedSpecs = roster.ContainsKey("sharedSpecs") ? ParseObj(roster["sharedSpecs"]) : new Dictionary<string, string>();
        var bfCards = new Dictionary<string, string>(StringComparer.Ordinal);
        if (roster.ContainsKey("sharedBuyerFit")) {
            var sbf = ParseObj(roster["sharedBuyerFit"]);
            if (sbf.ContainsKey("cards")) bfCards = ParseObj(sbf["cards"]);
        }
        var bfGroups = roster.ContainsKey("buyerFitGroups") ? ParseObj(roster["buyerFitGroups"]) : new Dictionary<string, string>();
        var engineObjs = ParseArrayItems(roster.ContainsKey("engines") ? roster["engines"] : "");
        if (engineObjs.Count == 0) errs.Add(cid + ": roster.engines is empty");

        var engineIds = new HashSet<string>(StringComparer.Ordinal);
        var subStatSet = new HashSet<string>(subStatKeys, StringComparer.Ordinal);
        var allowedFuel = new HashSet<string>(new[] { "petrol", "diesel", "hybrid" });
        var allowedTiers = new HashSet<string>(new[] { "yellow", "orange", "red" });

        var edMap = top.ContainsKey("engineDates") ? ParseObj(top["engineDates"]) : new Dictionary<string, string>();
        string ymVal = roster.ContainsKey("yearMake") ? Unquote(roster["yearMake"]) : "";
        bool hasRosterYears = Regex.IsMatch(ymVal, @"\d{4}");
        var extraSources = new System.Text.StringBuilder();
        foreach (string eo in engineObjs) {
            var ep = ParseObj(eo);
            string eid = ep.ContainsKey("id") ? Unquote(ep["id"]) : "";
            if (string.IsNullOrEmpty(eid)) { errs.Add(cid + ": engine missing id"); continue; }
            if (!engineIds.Add(eid)) errs.Add(cid + ": duplicate engine id '" + eid + "'");
            CountFullCarSchemaChecks++;

            // Shared engine library: engine-owned data comes from data/engines/<engineRef>.js and always wins
            if (ep.ContainsKey("engineRef")) {
                string refId = Unquote(ep["engineRef"]);
                string libSrc = LoadEngineLibSource(refId);
                var libEp = libSrc == null ? null : ParseEngineLib(libSrc);
                if (libEp == null) {
                    errs.Add(cid + "/" + eid + ": engineRef '" + refId + "' missing or invalid in data/engines/" + refId + ".js");
                } else {
                    extraSources.Append(libSrc).Append('\n');
                    string libFuel = libEp.ContainsKey("fuelType") ? Unquote(libEp["fuelType"]) : "";
                    string carFuel = ep.ContainsKey("fuelType") ? Unquote(ep["fuelType"]) : "";
                    if (libFuel != carFuel) errs.Add(cid + "/" + eid + ": fuelType '" + carFuel + "' differs from shared engine " + refId + " ('" + libFuel + "')");
                    string libHp = libEp.ContainsKey("hp") ? libEp["hp"].Trim() : "";
                    string carHp = ep.ContainsKey("hp") ? ep["hp"].Trim() : "";
                    int libHpInt, carHpInt;
                    if (int.TryParse(libHp, out libHpInt) && int.TryParse(carHp, out carHpInt)) {
                        // +/-1 tolerates PS vs kW rounding of the same engine (e.g. 130 vs 131 PS)
                        if (Math.Abs(libHpInt - carHpInt) > 1) errs.Add(cid + "/" + eid + ": hp " + carHp + " differs from shared engine " + refId + " (" + libHp + ")");
                    }

                    var mergedOvr = ep.ContainsKey("specOverrides") ? ParseObj(ep["specOverrides"]) : new Dictionary<string, string>();
                    if (libEp.ContainsKey("specOverrides")) {
                        foreach (var kv in ParseObj(libEp["specOverrides"])) {
                            if (mergedOvr.ContainsKey(kv.Key)) errs.Add(cid + "/" + eid + ": specOverrides." + kv.Key + " is engine-owned (data/engines/" + refId + ".js) - remove it from the car file");
                            mergedOvr[kv.Key] = kv.Value;
                        }
                    }
                    ep["specOverrides"] = BuildObj(mergedOvr);

                    var mergedSubs = ep.ContainsKey("subStats") ? ParseObj(ep["subStats"]) : new Dictionary<string, string>();
                    if (libEp.ContainsKey("subStats")) {
                        foreach (var kv in ParseObj(libEp["subStats"])) {
                            if (mergedSubs.ContainsKey(kv.Key)) errs.Add(cid + "/" + eid + ": subStats." + kv.Key + " is engine-owned (data/engines/" + refId + ".js) - remove it from the car file");
                            mergedSubs[kv.Key] = kv.Value;
                        }
                    }
                    ep["subStats"] = BuildObj(mergedSubs);
                }
            }
            string enSub = "";
            if (ep.ContainsKey("engineSubLabel")) {
                var slObj = ParseObj(ep["engineSubLabel"]);
                if (slObj.ContainsKey("en")) enSub = Unquote(slObj["en"]);
            }
            bool hasInlineDate = Regex.IsMatch(enSub, @"\((?:\d{2}/)?\d{4}\s*[–-]\s*(?:\d{2}/)?\d{4}\)");
            if (!hasInlineDate && !edMap.ContainsKey(eid) && !hasRosterYears) {
                errs.Add(cid + "/" + eid + ": missing production date span in engineSubLabel.en, engineDates, or roster.yearMake");
            }

            string ft = ep.ContainsKey("fuelType") ? Unquote(ep["fuelType"]) : "";
            if (!allowedFuel.Contains(ft)) errs.Add(cid + "/" + eid + ": invalid fuelType '" + ft + "'");

            double hpVal;
            if (!ep.ContainsKey("hp") || !double.TryParse(ep["hp"].Trim(), NumberStyles.Float, CultureInfo.InvariantCulture, out hpVal) || hpVal <= 0) {
                errs.Add(cid + "/" + eid + ": invalid numeric hp");
            }

            if (!ep.ContainsKey("engineSubLabel")) errs.Add(cid + "/" + eid + ": missing engineSubLabel");
            else {
                var sl = ParseObj(ep["engineSubLabel"]);
                CheckLangs(sl, cid + "/" + eid + ".engineSubLabel", errs);
                if (sl.ContainsKey("en") && Regex.IsMatch(sl["en"], "\\bNm\\s+Torque\\b", RegexOptions.IgnoreCase)) {
                    errs.Add(cid + "/" + eid + ": engineSubLabel.en contains forbidden 'Nm Torque' wording");
                }
            }

            // Spec rows 40/40
            var ovr = ep.ContainsKey("specOverrides") ? ParseObj(ep["specOverrides"]) : new Dictionary<string, string>();
            for (int r = 0; r < specRowKeys.Length; r++) {
                string rk = specRowKeys[r];
                if (!sharedSpecs.ContainsKey(rk) && !ovr.ContainsKey(rk)) {
                    errs.Add(cid + "/" + eid + ": missing spec row '" + rk + "' (neither sharedSpecs nor specOverrides)");
                }
            }

            // SubStats 19/19 + bounds + badges
            var subs = ep.ContainsKey("subStats") ? ParseObj(ep["subStats"]) : new Dictionary<string, string>();
            for (int s = 0; s < subStatKeys.Length; s++) {
                string sk = subStatKeys[s];
                if (!subs.ContainsKey(sk)) {
                    errs.Add(cid + "/" + eid + ": missing subStat '" + sk + "'");
                    continue;
                }
                var sObj = ParseObj(subs[sk]);
                double scoreVal;
                if (!sObj.ContainsKey("score") || !double.TryParse(sObj["score"].Trim(), NumberStyles.Float, CultureInfo.InvariantCulture, out scoreVal) || scoreVal < 0.0 || scoreVal > 10.0) {
                    errs.Add(cid + "/" + eid + ": invalid subStat '" + sk + "' score");
                }
                if (!sObj.ContainsKey("badges")) errs.Add(cid + "/" + eid + ": subStat '" + sk + "' missing badges");
                else CheckLangs(ParseObj(sObj["badges"]), cid + "/" + eid + "." + sk + ".badges", errs);
            }
            foreach (string ek in subs.Keys) {
                if (!subStatSet.Contains(ek)) errs.Add(cid + "/" + eid + ": unknown subStat key '" + ek + "'");
            }

            // Powertrain dossier + 6 highMileage steps
            if (subs.ContainsKey("powertrainDurability")) {
                var ptObj = ParseObj(subs["powertrainDurability"]);
                if (!ptObj.ContainsKey("dossier")) {
                    errs.Add(cid + "/" + eid + ": missing powertrainDurability.dossier");
                } else {
                    var pd = ParseObj(ptObj["dossier"]);
                    CheckLangs(pd, cid + "/" + eid + ".powertrain.dossier", errs);
                    foreach (string lg in new[] { "en", "de", "ru" }) {
                        if (!pd.ContainsKey(lg)) continue;
                        var dl = ParseObj(pd[lg]);
                        foreach (string reqF in new[] { "headline", "strengths", "watchouts", "beforeYouBuy", "highMileage" }) {
                            if (!dl.ContainsKey(reqF)) errs.Add(cid + "/" + eid + ".dossier." + lg + " missing '" + reqF + "'");
                        }
                        if (dl.ContainsKey("beforeYouBuy")) {
                            var byb = ParseArrayItems(dl["beforeYouBuy"]);
                            if (byb.Count < 3) errs.Add(cid + "/" + eid + ".dossier." + lg + " beforeYouBuy has fewer than 3 checks (" + byb.Count + ")");
                        }
                        if (dl.ContainsKey("highMileage")) {
                            var hm = ParseArrayItems(dl["highMileage"]);
                            if (hm.Count != 6) {
                                errs.Add(cid + "/" + eid + ".dossier." + lg + " highMileage count=" + hm.Count + " (expected 6)");
                            } else {
                                for (int h = 0; h < hm.Count; h++) {
                                    var hObj = ParseObj(hm[h]);
                                    string tier = hObj.ContainsKey("tier") ? Unquote(hObj["tier"]) : "";
                                    if (!allowedTiers.Contains(tier)) errs.Add(cid + "/" + eid + ".dossier." + lg + " highMileage[" + h + "] invalid tier '" + tier + "'");
                                    foreach (string hf in new[] { "km", "action", "cost", "ifIgnored", "damageCost" }) {
                                        if (!hObj.ContainsKey(hf)) errs.Add(cid + "/" + eid + ".dossier." + lg + " highMileage[" + h + "] missing '" + hf + "'");
                                    }
                                }
                            }
                        }
                    }
                }
            }

            // Repair guide
            if (subs.ContainsKey("maintenanceRepairCosts")) {
                var mrObj = ParseObj(subs["maintenanceRepairCosts"]);
                if (!mrObj.ContainsKey("repairGuide")) {
                    errs.Add(cid + "/" + eid + ": missing maintenanceRepairCosts.repairGuide");
                } else {
                    var rg = ParseObj(mrObj["repairGuide"]);
                    if (!rg.ContainsKey("routine") || !rg.ContainsKey("critical")) {
                        errs.Add(cid + "/" + eid + ": repairGuide missing routine or critical array");
                    }
                }
            }

            // Buyer fit key resolution
            if (ep.ContainsKey("buyerFit")) {
                CheckLangs(ParseObj(ep["buyerFit"]), cid + "/" + eid + ".buyerFit", errs);
            } else {
                string bfg = ep.ContainsKey("buyerFitGroup") ? Unquote(ep["buyerFitGroup"]) : "";
                if (string.IsNullOrEmpty(bfg) || !bfGroups.ContainsKey(bfg)) {
                    errs.Add(cid + "/" + eid + ": missing or unknown buyerFitGroup '" + bfg + "'");
                } else {
                    var grpObj = ParseObj(bfGroups[bfg]);
                    var ovrObj = ep.ContainsKey("buyerFitOverrides") ? ParseObj(ep["buyerFitOverrides"]) : new Dictionary<string, string>();
                    foreach (var dict in new[] { grpObj, ovrObj }) {
                        foreach (string listKey in new[] { "ideal", "skip" }) {
                            if (!dict.ContainsKey(listKey)) continue;
                            foreach (string cardItem in ParseArrayItems(dict[listKey])) {
                                string ck = Unquote(cardItem);
                                if (!bfCards.ContainsKey(ck) && !globalBuyerFitKeys.Contains(ck)) {
                                    errs.Add(cid + "/" + eid + ": unresolved buyerFit card '" + ck + "'");
                                }
                            }
                        }
                    }
                }
            }
        }

        string defEid = roster.ContainsKey("defaultEngineId") ? Unquote(roster["defaultEngineId"]) : "";
        if (string.IsNullOrEmpty(defEid) || !engineIds.Contains(defEid)) {
            errs.Add(cid + ": defaultEngineId '" + defEid + "' not found in roster.engines[]");
        }
        if (!roster.ContainsKey("sharedGearboxes")) {
            errs.Add(cid + ": missing required sharedGearboxes catalog");
        } else {
            var sgMap = ParseObj(roster["sharedGearboxes"]);
            foreach (var sgKv in sgMap) {
                var sgObj = ParseObj(sgKv.Value);
                string cat = sgObj.ContainsKey("category") ? Unquote(sgObj["category"]) : "";
                if (cat != "manual" && cat != "automatic") {
                    errs.Add(cid + "/sharedGearboxes." + sgKv.Key + ": invalid category '" + cat + "'");
                }
                if (!sgObj.ContainsKey("label")) errs.Add(cid + "/sharedGearboxes." + sgKv.Key + ": missing label");
                else CheckLangs(ParseObj(sgObj["label"]), cid + "/sharedGearboxes." + sgKv.Key + ".label", errs);
                if (!sgObj.ContainsKey("subLabel")) errs.Add(cid + "/sharedGearboxes." + sgKv.Key + ": missing subLabel");
                else {
                    var slMap = ParseObj(sgObj["subLabel"]);
                    CheckLangs(slMap, cid + "/sharedGearboxes." + sgKv.Key + ".subLabel", errs);
                    foreach (var slKv in slMap) {
                        string slVal = Unquote(slKv.Value);
                        if (Regex.IsMatch(slVal, @"(?i)(crisp\s+shift|dash-mounted|@\s*\d+k|alle\s+\d+|каждые)")) {
                            errs.Add(cid + "/sharedGearboxes." + sgKv.Key + ".subLabel." + slKv.Key + ": forbidden fluff or service-interval tail ('" + slVal + "')");
                        }
                    }
                }
            }
            foreach (string eo in engineObjs) {
                var ep = ParseObj(eo);
                string eid = ep.ContainsKey("id") ? Unquote(ep["id"]) : "<missing-id>";
                if (!ep.ContainsKey("gearboxes")) {
                    errs.Add(cid + "/" + eid + ": missing gearboxes[] when sharedGearboxes is defined");
                    continue;
                }
                var gbItems = ParseArrayItems(ep["gearboxes"]);
                if (gbItems.Count == 0) errs.Add(cid + "/" + eid + ": gearboxes[] is empty");
                var gbIds = new HashSet<string>(StringComparer.Ordinal);
                string defGid = ep.ContainsKey("defaultGearboxId") ? Unquote(ep["defaultGearboxId"]) : "";
                foreach (string gi in gbItems) {
                    var go = ParseObj(gi);
                    string gid = go.ContainsKey("id") ? Unquote(go["id"]) : "";
                    if (string.IsNullOrEmpty(gid) || !sgMap.ContainsKey(gid)) {
                        errs.Add(cid + "/" + eid + ": gearbox '" + gid + "' not found in sharedGearboxes");
                    } else {
                        gbIds.Add(gid);
                        if (!string.IsNullOrEmpty(defGid) && gid != defGid) {
                            if (!go.ContainsKey("estUsedPrice") || string.IsNullOrEmpty(Unquote(go["estUsedPrice"]))) {
                                errs.Add(cid + "/" + eid + "/gearbox." + gid + ": non-default gearbox missing estUsedPrice");
                            }
                            if (!go.ContainsKey("specOverrides")) {
                                errs.Add(cid + "/" + eid + "/gearbox." + gid + ": non-default gearbox missing specOverrides");
                            } else {
                                var gso = ParseObj(go["specOverrides"]);
                                foreach (string reqSpec in new[] { "sprint0100", "topSpeed", "realWorldFuel" }) {
                                    if (!gso.ContainsKey(reqSpec)) errs.Add(cid + "/" + eid + "/gearbox." + gid + ": specOverrides missing " + reqSpec);
                                }
                            }
                            var mergedGsd = new HashSet<string>(StringComparer.Ordinal);
                            var sharedGbObj = ParseObj(sgMap[gid]);
                            if (sharedGbObj.ContainsKey("subStatDeltas")) {
                                foreach (string sk in ParseObj(sharedGbObj["subStatDeltas"]).Keys) mergedGsd.Add(sk);
                            }
                            if (go.ContainsKey("subStatDeltas")) {
                                foreach (string sk in ParseObj(go["subStatDeltas"]).Keys) mergedGsd.Add(sk);
                            }
                            if (mergedGsd.Count == 0) {
                                errs.Add(cid + "/" + eid + "/gearbox." + gid + ": non-default gearbox missing subStatDeltas");
                            } else {
                                foreach (string reqDelta in new[] { "transmissionDriveline", "efficiencyFuel" }) {
                                    if (!mergedGsd.Contains(reqDelta)) errs.Add(cid + "/" + eid + "/gearbox." + gid + ": merged subStatDeltas missing " + reqDelta);
                                }
                            }
                        }
                    }
                }
                if (string.IsNullOrEmpty(defGid) || !gbIds.Contains(defGid)) {
                    errs.Add(cid + "/" + eid + ": defaultGearboxId '" + defGid + "' not found in gearboxes[]");
                }
                if (ep.ContainsKey("specOverrides")) {
                    var soMap = ParseObj(ep["specOverrides"]);
                    foreach (string chkKey in new[] { "gearbox", "peakTorque", "sprint0100", "towingBraked" }) {
                        if (!soMap.ContainsKey(chkKey)) continue;
                        string rawSpec = soMap[chkKey];
                        if (Regex.IsMatch(rawSpec, @"(?i)(\(MT\)\s*/|\b\d-?MT\s*/|\bMT\s*/\s*\d)")) {
                            errs.Add(cid + "/" + eid + ".specOverrides." + chkKey + ": unsplit MT/AT dual value '" + rawSpec + "'");
                        }
                    }
                }
            }
        }
        if (top.ContainsKey("engineDates")) {
            var ed = ParseObj(top["engineDates"]);
            foreach (string edKey in ed.Keys) {
                if (!engineIds.Contains(edKey)) errs.Add(cid + ": engineDates references unknown engine '" + edKey + "'");
            }
        }

        // Token & tech-label referential integrity across whole file
        string tokenSource = carSource + "\n" + extraSources.ToString();
        foreach (Match tm in Regex.Matches(tokenSource, "'(@[A-Za-z0-9_]+)'")) {
            string tok = tm.Groups[1].Value;
            if (!validAtTokens.Contains(tok)) errs.Add(cid + ": unknown token/preset '" + tok + "'");
        }
        foreach (Match km in Regex.Matches(tokenSource, "\\{\\s*k:\\s*'([A-Za-z0-9_]+)'")) {
            string tk = km.Groups[1].Value;
            if (!validTechKeys.Contains(tk)) errs.Add(cid + ": unknown DOSSIER_TECH_LABELS key '" + tk + "'");
        }

        return errs;
    }
}
'@

try {
  $manifestPath = './data/manifest.js'
  $carFiles = if (Test-Path -LiteralPath './data/cars') {
    @(Get-ChildItem -LiteralPath './data/cars' -Filter '*.js' -File | Where-Object { -not $_.Name.StartsWith('_') } | Sort-Object Name)
  } else { @() }

  $cssModules = @(
    './css/tokens-base.css',
    './css/home-catalog.css',
    './css/duel-arena.css',
    './css/modals-popovers.css',
    './css/vehicle-indepth.css'
  )
  $appJsModules = @(
    './js/i18n-schema.js',
    './js/state-and-scoring.js',
    './js/home-catalog.js',
    './js/duel-arena.js',
    './js/vehicle-indepth.js',
    './js/app.js'
  )
  $templateFile = './data/cars/_template.js'
  $engineLibFiles = if (Test-Path -LiteralPath './data/engines') {
    @(Get-ChildItem -LiteralPath './data/engines' -Filter '*.js' -File | Sort-Object Name)
  } else { @() }
  [JsInDepthValidator]::EnginesDir = $(if (Test-Path -LiteralPath './data/engines') { (Resolve-Path -LiteralPath './data/engines').Path } else { '' })
  $jsFiles = @($manifestPath) + $appJsModules + @($carFiles | ForEach-Object { "./data/cars/$($_.Name)" }) + @($engineLibFiles | ForEach-Object { "./data/engines/$($_.Name)" })
  $allSourceFiles = @('./index.html') + $cssModules + $jsFiles
  if (Test-Path -LiteralPath $templateFile) { $jsFiles += $templateFile; $allSourceFiles += $templateFile }
  else { Add-Fail "Missing golden vehicle template: $templateFile" }
  $fileCache = @{}

  foreach ($f in $allSourceFiles) {
    if (-not (Test-Path -LiteralPath $f)) {
      Add-Fail "Missing required file: $f"
      continue
    }
    $fileCache[$f] = [IO.File]::ReadAllText((Resolve-Path -LiteralPath $f).Path, [Text.Encoding]::UTF8)
  }

  $bomTargets = $allSourceFiles + @('./validate.ps1', './scripts/build-manifest.ps1', './scripts/process-assets.ps1')
  $bomHits = @()
  foreach ($bf in $bomTargets) {
    if (-not (Test-Path -LiteralPath $bf)) { continue }
    $bytes = [IO.File]::ReadAllBytes((Resolve-Path -LiteralPath $bf).Path)
    if ($bytes.Length -ge 3 -and $bytes[0] -eq 0xEF -and $bytes[1] -eq 0xBB -and $bytes[2] -eq 0xBF) {
      $bomHits += $bf
    }
  }
  if ($bomHits.Count -gt 0) {
    Add-Fail "UTF-8 BOM detected (re-save without BOM): $($bomHits -join ', ')"
  } else {
    Add-Pass "Zero UTF-8 BOM bytes across all $($bomTargets.Count) source & script files"
  }

  # 1. Delimiter balance
  $jsBalanceOk = $true
  foreach ($f in $jsFiles) {
    if (-not $fileCache.ContainsKey($f)) { continue }
    $c = $fileCache[$f]
    $b  = ($c.Split('{').Count - 1) - ($c.Split('}').Count - 1)
    $sq = ($c.Split('[').Count - 1) - ($c.Split(']').Count - 1)
    $p  = ($c.Split('(').Count - 1) - ($c.Split(')').Count - 1)
    if ($b -ne 0 -or $sq -ne 0 -or $p -ne 0) {
      Add-Fail "$f delimiter imbalance (Braces: $b, Brackets: $sq, Parens: $p)"
      $jsBalanceOk = $false
    }
  }
  if ($jsBalanceOk) {
    Add-Pass "All $($jsFiles.Count) JS files delimiter balance (0/0/0)"
  }

  $cssBalanceOk = $true
  foreach ($f in $cssModules) {
    if (-not $fileCache.ContainsKey($f)) { continue }
    $css = $fileCache[$f]
    $cb = ($css.Split('{').Count - 1) - ($css.Split('}').Count - 1)
    if ($cb -ne 0) {
      Add-Fail "$f brace imbalance ($cb)"
      $cssBalanceOk = $false
    }
  }
  if ($cssBalanceOk) {
    Add-Pass "All $($cssModules.Count) CSS modules brace balance (0)"
  }

  $cssAllText = ($cssModules | Where-Object { $fileCache.ContainsKey($_) } | ForEach-Object { $fileCache[$_] }) -join "`n"
  $definedCssVars = New-Object 'System.Collections.Generic.HashSet[string]' ([System.StringComparer]::Ordinal)
  foreach ($dm in [regex]::Matches($cssAllText, '(--[A-Za-z0-9_-]+)\s*:')) { [void]$definedCssVars.Add($dm.Groups[1].Value) }
  $undefCssVars = New-Object System.Collections.Generic.List[string]
  foreach ($um in [regex]::Matches($cssAllText, 'var\(\s*(--[A-Za-z0-9_-]+)')) {
    $vName = $um.Groups[1].Value
    if (-not $definedCssVars.Contains($vName) -and -not $undefCssVars.Contains($vName)) {
      $undefCssVars.Add($vName)
    }
  }
  if ($undefCssVars.Count -gt 0) {
    Add-Fail "Undefined CSS custom properties referenced: $($undefCssVars -join ', ')"
  } else {
    Add-Pass "Zero undefined CSS custom properties across all $($cssModules.Count) CSS modules"
  }

  # 2. Optional Node syntax check
  $nodeExe = @((Get-Command node -ErrorAction SilentlyContinue).Source,
               "$env:ProgramFiles\nodejs\node.exe",
               "$env:LOCALAPPDATA\Programs\nodejs\node.exe") | Where-Object { $_ -and (Test-Path -LiteralPath $_) } | Select-Object -First 1
  if ($nodeExe) {
    $nodeOk = $true
    foreach ($f in $jsFiles) {
      & $nodeExe --check $f 2>&1 | Out-Null
      if ($LASTEXITCODE -ne 0) {
        Add-Fail "Node syntax check failed for $f"
        $nodeOk = $false
      }
    }
    if ($nodeOk) { Add-Pass "Node syntax check passed ($nodeExe)" }
  } elseif (-not $Quiet) {
    Write-Host "INFO: node.exe not found (optional JS parser check skipped)" -ForegroundColor Yellow
  }

  # 3. HTML script/CSS load order, retired files, & path hygiene
  foreach ($retired in @('./cars-data.js', './cars-indepth.js', './styles.css', './app.js')) {
    if (Test-Path -LiteralPath $retired) {
      Add-Fail "Retired monolithic file still present: $retired"
    }
  }

  if ($fileCache.ContainsKey('./index.html')) {
    $html = $fileCache['./index.html']
    $cssLastIdx = -1
    $cssOrderOk = $true
    foreach ($cf in $cssModules) {
      $rel = $cf.Substring(2)
      $mc = [regex]::Match($html, ('href="' + [regex]::Escape($rel) + '(\?[^"]*)?"'))
      if (-not $mc.Success) {
        Add-Fail "./index.html is missing stylesheet $rel"
        $cssOrderOk = $false
      } elseif ($mc.Index -le $cssLastIdx) {
        Add-Fail "./index.html CSS load order invalid at $rel"
        $cssOrderOk = $false
      }
      if ($mc.Success) { $cssLastIdx = $mc.Index }
    }

    $expectedScripts = @('data/manifest.js') + @($appJsModules | ForEach-Object { $_.Substring(2) })
    $jsLastIdx = -1
    $jsOrderOk = $true
    foreach ($sf in $expectedScripts) {
      $ms = [regex]::Match($html, ('<script[^>]+src="' + [regex]::Escape($sf) + '(\?[^"]*)?"'))
      if (-not $ms.Success) {
        Add-Fail "./index.html is missing script $sf"
        $jsOrderOk = $false
      } elseif ($ms.Index -le $jsLastIdx) {
        Add-Fail "./index.html script load order invalid at $sf"
        $jsOrderOk = $false
      }
      if ($ms.Success) { $jsLastIdx = $ms.Index }
    }

    if ($cssOrderOk -and $jsOrderOk) {
      Add-Pass "./index.html loads all $($cssModules.Count) CSS and $($expectedScripts.Count) JS files in exact dependency order"
    }
  }

  $absHits = @()
  foreach ($f in $allSourceFiles) {
    if (-not $fileCache.ContainsKey($f)) { continue }
    if ($fileCache[$f] -match '([A-Za-z]:\\|file:///)') {
      $absHits += $f
    }
  }
  if ($absHits.Count -gt 0) {
    Add-Fail "Hardcoded local paths found in: $($absHits -join ', ')"
  } else {
    Add-Pass "Zero hardcoded Windows/file:/// paths across all $($allSourceFiles.Count) source files"
  }

  # 4. Data/Logic split in app.js & roster parsing from data/manifest.js
  $rosterIds = @()
  $manifestRaw = if ($fileCache.ContainsKey($manifestPath)) { $fileCache[$manifestPath] } else { '' }
  if ($manifestRaw) {
    $rosterBlockMatch = [regex]::Match($manifestRaw, 'const CAR_ROSTER\s*=\s*\[([\s\S]*?)\n\];')
    if ($rosterBlockMatch.Success) {
      $rosterIds = @([regex]::Matches($rosterBlockMatch.Groups[1].Value, "(?m)^    id:\s*'([a-z0-9-]+)'") | ForEach-Object { $_.Groups[1].Value })
    }
  }
  if ($rosterIds.Count -eq 0) {
    Add-Fail "No cars parsed from CAR_ROSTER in $manifestPath"
  }

  $yearSuffixIds = @($rosterIds | Where-Object { $_ -match '-20\d{2}$' })
  if ($yearSuffixIds.Count -gt 0) {
    Add-Fail "Car IDs must use chassis codes (not -YYYY): $($yearSuffixIds -join ', ')"
  } else {
    Add-Pass "All $($rosterIds.Count) car IDs follow <brand>-<model>-<chassis> naming"
  }

  $forbiddenDefs = @('CAR_ROSTER', 'CAR_AVAILABLE_ANGLES', 'CAR_MIRRORED_ANGLES',
                     'CAR_INDEPTH_DATA', 'CAR_FACTORY_PAINTS', 'ENGINE_DATE_FALLBACKS',
                     'LEGACY_CAR_ID_MAP')
  $dupDefs = @()
  $hardcodedIds = @()
  $declMap = @{}
  foreach ($jf in $appJsModules) {
    if (-not $fileCache.ContainsKey($jf)) { continue }
    $jsRaw = $fileCache[$jf]
    foreach ($sym in $forbiddenDefs) {
      if ($jsRaw -match "(?m)^\s*(const|let|var)\s+$sym\b") {
        $dupDefs += "${jf}:$sym"
      }
    }
    foreach ($cid in $rosterIds) {
      if ($jsRaw -match [regex]::Escape($cid)) {
        $hardcodedIds += "${jf}:$cid"
      }
    }
    foreach ($dm in [regex]::Matches($jsRaw, '(?m)^(?:const|let|var|async\s+function|function)\s+([A-Za-z_$][A-Za-z0-9_$]*)\b')) {
      $symName = $dm.Groups[1].Value
      if (-not $declMap.ContainsKey($symName)) {
        $declMap[$symName] = New-Object System.Collections.Generic.List[string]
      }
      $declMap[$symName].Add($jf)
    }
  }
  if ($dupDefs.Count -gt 0) {
    Add-Fail "js/*.js redefines external data globals: $($dupDefs -join ', ')"
  } else {
    Add-Pass "All $($appJsModules.Count) js/*.js modules define zero external data globals"
  }

  if ($hardcodedIds.Count -gt 0) {
    Add-Fail "js/*.js contains hardcoded roster IDs: $($hardcodedIds -join ', ')"
  } else {
    Add-Pass "All $($appJsModules.Count) js/*.js modules contain zero hardcoded roster car IDs"
  }

  $crossCollisions = @($declMap.Keys | Where-Object { $declMap[$_].Count -gt 1 } | ForEach-Object { "$_ ($($declMap[$_] -join ', '))" })
  if ($crossCollisions.Count -gt 0) {
    Add-Fail "Cross-module duplicate top-level identifiers: $($crossCollisions -join '; ')"
  } else {
    Add-Pass "Zero cross-module duplicate top-level identifiers ($($declMap.Count) symbols across $($appJsModules.Count) JS modules)"
  }

  # 5. Per-car file, asset, angle, & paint integrity
  $anglesBlockMatch = [regex]::Match($manifestRaw, 'const CAR_AVAILABLE_ANGLES\s*=\s*\{([\s\S]*?)\n\};')
  $angleIds = @()
  if ($anglesBlockMatch.Success) {
    $angleIds = @([regex]::Matches($anglesBlockMatch.Groups[1].Value, "'([a-z0-9-]+)'\s*:") | ForEach-Object { $_.Groups[1].Value })
  }

  function Test-WebpFile([string]$Path) {
    if (-not (Test-Path -LiteralPath $Path -PathType Leaf)) { return $false }
    $bytes = [IO.File]::ReadAllBytes($Path)
    if ($bytes.Length -le 100) { return $false }
    return ([Text.Encoding]::ASCII.GetString($bytes, 0, 4) -eq 'RIFF' -and
            [Text.Encoding]::ASCII.GetString($bytes, 8, 4) -eq 'WEBP')
  }

  $angleSuffixes = @('.webp', '-front.webp', '-side.webp', '-side-rear.webp', '-rear.webp')
  $missingCarFiles = New-Object System.Collections.Generic.List[string]
  $missingAssets = New-Object System.Collections.Generic.List[string]
  $invalidWebpAssets = New-Object System.Collections.Generic.List[string]
  $missingThumbs = New-Object System.Collections.Generic.List[string]
  $invalidThumbs = New-Object System.Collections.Generic.List[string]
  $badImageProp = New-Object System.Collections.Generic.List[string]
  $missingAngles = New-Object System.Collections.Generic.List[string]
  $missingPaints = New-Object System.Collections.Generic.List[string]
  $inDepthIds = New-Object System.Collections.Generic.List[string]

  # Dynamically load canonical schema dictionaries from js/i18n-schema.js
  $schemaRaw = if ($fileCache.ContainsKey('./js/i18n-schema.js')) { $fileCache['./js/i18n-schema.js'] } else { '' }
  $spBlock = [regex]::Match($schemaRaw, 'const STAT_PILLARS\s*=\s*\[([\s\S]*?)\n\];').Groups[1].Value
  $subStatKeys = [string[]]@([regex]::Matches($spBlock, "key:\s*'([A-Za-z0-9_]+)'") | ForEach-Object { $_.Groups[1].Value })
  $pillarBlocks = [regex]::Split($spBlock, "(?=\r?\n\s{2}\{\s*\r?\n\s{4}id:\s*')|(?=\A\s*\{\s*\r?\n\s{4}id:\s*')") | Where-Object { $_ -match "id:\s*'" }
  $weightCheckOk = $pillarBlocks.Count -eq 5
  if ($pillarBlocks.Count -ne 5) {
    Add-Fail "Expected 5 pillars in STAT_PILLARS, found $($pillarBlocks.Count)"
  } else {
    foreach ($pb in $pillarBlocks) {
      $pidMatch = [regex]::Match($pb, "id:\s*'([^']+)'")
      $pidName = $pidMatch.Groups[1].Value
      $wMatches = [regex]::Matches($pb, "weight:\s*([0-9]+(?:\.[0-9]+)?)")
      $kMatches = [regex]::Matches($pb, "key:\s*'([A-Za-z0-9_]+)'")
      if ($wMatches.Count -ne $kMatches.Count) {
        Add-Fail "Pillar '$pidName' weight count ($($wMatches.Count)) does not match subRatings count ($($kMatches.Count))"
        $weightCheckOk = $false
      } else {
        $wSum = 0.0
        foreach ($wm in $wMatches) { $wSum += [double]::Parse($wm.Groups[1].Value, [Globalization.CultureInfo]::InvariantCulture) }
        if ([math]::Abs($wSum - 1.0) -ge 0.001) {
          Add-Fail ("Pillar '{0}' sub-weights sum to {1} instead of 1.00" -f $pidName, $wSum)
          $weightCheckOk = $false
        }
      }
    }
  }
  if ($weightCheckOk) {
    Add-Pass "All 5 STAT_PILLARS define intra-pillar sub-weights summing to 100%"
  }
  $srBlock = [regex]::Match($schemaRaw, 'const SUB_STAT_SPEC_ROWS\s*=\s*\{([\s\S]*?)\n\};').Groups[1].Value
  $specRowKeys = [string[]]@([regex]::Matches($srBlock, "key:\s*'([A-Za-z0-9_]+)'") | ForEach-Object { $_.Groups[1].Value })

  $validAtTokens = New-Object 'System.Collections.Generic.HashSet[string]' ([System.StringComparer]::Ordinal)
  foreach ($m in [regex]::Matches($schemaRaw, "'(@[A-Za-z0-9_]+)'\s*:")) { [void]$validAtTokens.Add($m.Groups[1].Value) }

  $dtBlock = [regex]::Match($schemaRaw, 'const DOSSIER_TECH_LABELS\s*=\s*\{([\s\S]*?)\n\};').Groups[1].Value
  $validTechKeys = New-Object 'System.Collections.Generic.HashSet[string]' ([System.StringComparer]::Ordinal)
  foreach ($m in [regex]::Matches($dtBlock, '(?m)^\s*([A-Za-z0-9_]+)\s*:')) { [void]$validTechKeys.Add($m.Groups[1].Value) }

  $bfBlock = [regex]::Match($schemaRaw, 'const SHARED_BUYER_FIT_CARDS\s*=\s*\{([\s\S]*?)\n\};').Groups[1].Value
  $globalBfKeys = New-Object 'System.Collections.Generic.HashSet[string]' ([System.StringComparer]::Ordinal)
  foreach ($m in [regex]::Matches($bfBlock, '(?m)^\s{2}([A-Za-z0-9_]+)\s*:')) { [void]$globalBfKeys.Add($m.Groups[1].Value) }

  $numberOwners = New-Object 'System.Collections.Generic.Dictionary[string,string]' ([System.StringComparer]::Ordinal)
  $gridOrderOwners = New-Object 'System.Collections.Generic.Dictionary[int,string]'
  [JsInDepthValidator]::CountFullCarSchemaChecks = 0
  $deepSchemaFailCount = 0

  foreach ($cid in $rosterIds) {
    $carFileKey = "./data/cars/$cid.js"
    if (-not $fileCache.ContainsKey($carFileKey)) {
      $missingCarFiles.Add($carFileKey)
    } else {
      $carRaw = $fileCache[$carFileKey]
      if ($carRaw -notmatch "image:\s*'assets/$cid\.webp'") {
        $badImageProp.Add($cid)
      }
      $paintsMatch = [regex]::Match($carRaw, '(?s)paints:\s*\[(.*?)\]')
      if (-not $paintsMatch.Success) {
        $missingPaints.Add($cid)
      } else {
        $pCnt = ([regex]::Matches($paintsMatch.Groups[1].Value, 'name:')).Count
        $cCnt = ([regex]::Matches($paintsMatch.Groups[1].Value, 'code:')).Count
        $hCnt = ([regex]::Matches($paintsMatch.Groups[1].Value, 'hex:')).Count
        $gCnt = ([regex]::Matches($paintsMatch.Groups[1].Value, 'glow:')).Count
        $defCnt = ([regex]::Matches($paintsMatch.Groups[1].Value, 'isDefault:\s*true')).Count
        if ($pCnt -lt 5 -or $cCnt -ne $pCnt -or $hCnt -ne $pCnt -or $gCnt -ne $pCnt) {
          Add-Fail "$carFileKey paints invalid (need >=5 entries with name/code/hex/glow; got $pCnt/$cCnt/$hCnt/$gCnt)"
        }
        if ($defCnt -ne 1) {
          Add-Fail "$carFileKey paints must mark exactly 1 entry with isDefault: true (got $defCnt)"
        }
      }
      if ($carRaw -match '(?m)^\s{2}inDepth:\s*\{') {
        $inDepthIds.Add($cid)
      }
      foreach ($reqKey in @('roster:', 'angles:', 'mirroredAngles:', 'paints:', 'engineDates:', 'inDepth:')) {
        if ($carRaw -notmatch "(?m)^\s{2}$reqKey") {
          Add-Fail "$carFileKey missing top-level property $reqKey"
        }
      }
      if ($carRaw -match '\\r\\n|param\(\$m\)') {
        Add-Fail "$carFileKey contains invalid literal escape or scriptblock artifacts"
      }
      $inDepthErrs = [JsInDepthValidator]::Check($carRaw, $cid)
      foreach ($ie in $inDepthErrs) {
        Add-Fail "InDepth schema: $ie"
      }
      $fullErrs = [JsInDepthValidator]::CheckFullCarSchema($carRaw, $cid, $specRowKeys, $subStatKeys, $validAtTokens, $validTechKeys, $globalBfKeys, $numberOwners, $gridOrderOwners)
      foreach ($fe in $fullErrs) {
        Add-Fail "Car schema v2: $fe"
        $deepSchemaFailCount++
      }
    }

    foreach ($suf in $angleSuffixes) {
      $pAsset = "./assets/$cid$suf"
      if (-not (Test-Path -LiteralPath $pAsset)) { $missingAssets.Add($pAsset) }
      elseif (-not (Test-WebpFile $pAsset)) { $invalidWebpAssets.Add($pAsset) }
    }
    $pThumb = "./assets/thumbs/$cid.webp"
    if (-not (Test-Path -LiteralPath $pThumb)) { $missingThumbs.Add($pThumb) }
    elseif (-not (Test-WebpFile $pThumb)) { $invalidThumbs.Add($pThumb) }
    if ($angleIds -notcontains $cid) { $missingAngles.Add($cid) }
  }

  if ($missingCarFiles.Count -gt 0) { Add-Fail "Missing per-car data files: $($missingCarFiles -join ', ')" }
  else { Add-Pass "All $($rosterIds.Count) per-car files exist in data/cars/" }

  if ($badImageProp.Count -gt 0) { Add-Fail "Car roster image must point to assets/<id>.webp: $($badImageProp -join ', ')" }
  else { Add-Pass "All $($rosterIds.Count) car files reference assets/<id>.webp" }

  if ($missingAssets.Count -gt 0) { Add-Fail "Missing angle WebPs: $($missingAssets -join ', ')" }
  elseif ($invalidWebpAssets.Count -gt 0) { Add-Fail "Invalid RIFF/WEBP header in: $($invalidWebpAssets -join ', ')" }
  else { Add-Pass "All $($rosterIds.Count * 5) angle WebP assets present & valid" }

  if ($missingThumbs.Count -gt 0) { Add-Fail "Missing WebP thumbnails: $($missingThumbs -join ', ')" }
  elseif ($invalidThumbs.Count -gt 0) { Add-Fail "Invalid RIFF/WEBP thumbnail header in: $($invalidThumbs -join ', ')" }
  else { Add-Pass "All $($rosterIds.Count) WebP thumbnails present & valid" }

  $strayPngs = @(Get-ChildItem -LiteralPath './assets' -Filter '*.png' -File)
  if ($strayPngs.Count -gt 0) { Add-Fail "Unarchived PNG files still in assets/: $($strayPngs.Name -join ', ')" }
  else { Add-Pass "Zero unarchived PNG files in assets/" }

  if ($missingAngles.Count -gt 0) { Add-Fail "Missing CAR_AVAILABLE_ANGLES entries: $($missingAngles -join ', ')" }
  else { Add-Pass "All $($rosterIds.Count) cars registered in CAR_AVAILABLE_ANGLES" }

  if ($missingPaints.Count -gt 0) { Add-Fail "Missing paints in per-car files: $($missingPaints -join ', ')" }
  else { Add-Pass "All $($rosterIds.Count) cars define OEM paints" }

  if ($inDepthIds.Count -ne $rosterIds.Count) { Add-Fail "In-Depth coverage incomplete: $($inDepthIds.Count)/$($rosterIds.Count)" }
  else { Add-Pass "All $($rosterIds.Count) cars define complete 7-tab inDepth schema" }

  if ($deepSchemaFailCount -eq 0) {
    Add-Pass ("All {0} cars & {1} engines pass deep v2 schema (40-spec, 19-subStat, @token, & BuyerFit)" -f $rosterIds.Count, [JsInDepthValidator]::CountFullCarSchemaChecks)
  }

  # 5b. Golden template parity check (_template.js)
  $tplKey = './data/cars/_template.js'
  if ($fileCache.ContainsKey($tplKey)) {
    $tplRaw = $fileCache[$tplKey]
    $tplErrs = New-Object System.Collections.Generic.List[string]
    foreach ($te in [JsInDepthValidator]::Check($tplRaw, '_template')) { $tplErrs.Add($te) }
    $tplNumOwners = New-Object 'System.Collections.Generic.Dictionary[string,string]'
    $tplGridOwners = New-Object 'System.Collections.Generic.Dictionary[int,string]'
    foreach ($tfe in [JsInDepthValidator]::CheckFullCarSchema($tplRaw, '<brand>-<model>-<chassis>', $specRowKeys, $subStatKeys, $validAtTokens, $validTechKeys, $globalBfKeys, $tplNumOwners, $tplGridOwners)) { $tplErrs.Add($tfe) }
    if ($tplErrs.Count -gt 0) {
      foreach ($te in $tplErrs) { Add-Fail "Template _template.js schema drift: $te" }
    } else {
      Add-Pass "Golden template data/cars/_template.js passes full v2 schema parity"
    }
  }

  # 6. Manifest parity & sanity check
  & './scripts/build-manifest.ps1' -Check
  if ($LASTEXITCODE -ne 0) {
    Add-Fail "Manifest freshness check failed (run scripts/build-manifest.ps1)"
  }
  if ($manifestRaw -match "'[a-z0-9-]+:'\s*:|\\r\\n") {
    Add-Fail "./data/manifest.js contains malformed ENGINE_DATE_FALLBACKS or literal escapes"
  } else {
    Add-Pass "./data/manifest.js structure & date keys clean"
  }

  # 7. Translation & dossier hygiene
  $sportLeak = @()
  $deTermLeaks = @()
  $insLeak = @()
  $scanTargets = $appJsModules + @($carFiles | ForEach-Object { "./data/cars/$($_.Name)" })
  foreach ($f in $scanTargets) {
    if (-not $fileCache.ContainsKey($f)) { continue }
    $txt = $fileCache[$f]
    if (($f -like './data/cars/*' -or $f -like './data/engines/*') -and $txt -match "en:\s*'[^']*Sportfahrwerk") { $sportLeak += $f }
    if ($f -like './data/cars/*') {
      foreach ($dm in [regex]::Matches($txt, "de:\s*'([^'\\]*(?:\\.[^'\\\\]*)*)'")) {
        $dv = $dm.Groups[1].Value
        if ($dv -cmatch '\bBoot\b|\bInline-4\b|\bNA\b|\bTrack\b') {
          $deTermLeaks += "$f -> $dv"
        }
      }
      foreach ($ab in [regex]::Matches($txt, "de:\s*\[([\s\S]*?)\]")) {
        foreach ($sm in [regex]::Matches($ab.Groups[1].Value, "'([^'\\]*(?:\\.[^'\\]*)*)'")) {
          $sv = $sm.Groups[1].Value
          if ($sv -cmatch '\bBoot\b|\bInline-4\b|\bNA\b|\bTrack\b') {
            $deTermLeaks += "$f -> $sv"
          }
        }
      }
    }
    if ($txt -match 'KH/TK/VK') { $insLeak += $f }
    if (($f -like './data/cars/*' -or $f -like './data/engines/*') -and $txt -match '\(\d+(?:\.\d+)?/10\)') {
      Add-Fail "$f contains hardcoded (/10) score string in text"
    }
    if ($f -like './data/cars/*' -and $f -notmatch '_template\.js$') {
      if ($txt -notmatch 'rarityLabel:\s*\{') {
        Add-Fail "$f missing required trilingual rarityLabel"
      }
      if ($txt -match "realWorldFuel:\s*'[^']*\(~€") {
        Add-Fail "$f contains (~€...) cost suffix inside realWorldFuel"
      }
      if ($f -notmatch 'toyota-' -and $txt -match '@gbManual6Toyota') {
        Add-Fail "$f uses Toyota-specific gearbox preset @gbManual6Toyota in a non-Toyota file"
      }
      if ($f -notmatch 'honda-' -and $txt -match '@gb(?:Manual[56]Honda|CvtHonda)') {
        Add-Fail "$f uses Honda-specific gearbox preset in a non-Honda file"
      }
      if ($f -notmatch 'ford-' -and $txt -match '@gb(?:Manual[56]Ford|Auto6Ford)') {
        Add-Fail "$f uses Ford-specific gearbox preset in a non-Ford file"
      }
      if ($f -notmatch 'peugeot-' -and $txt -match '@gbManual6Psa') {
        Add-Fail "$f uses Peugeot-specific gearbox preset @gbManual6Psa in a non-Peugeot file"
      }
      if ($txt -match "efficiencyFuel:[^\r\n]*'\d+(?:[.,]\d+)?\s+[Rr]eal'") {
        Add-Fail "$f has bare 'X.X Real' fuel badge without L/100km unit"
      }
      if ($txt -match 'dossierBreakdowns:\s*\{\s*gearbox:') {
        Add-Fail "$f has flat dossierBreakdowns.gearbox (must wrap under transmissionDriveline)"
      }
    }
  }

  # Shared engine library integrity + duplicate-engine guard
  $engineRefUse = @{}
  foreach ($cf in $carFiles) {
    $ctxt = $fileCache["./data/cars/$($cf.Name)"]
    foreach ($rm in [regex]::Matches($ctxt, "(?m)^\s{8}engineRef:\s*'([^']+)'")) {
      $rname = $rm.Groups[1].Value
      if (-not $engineRefUse.ContainsKey($rname)) { $engineRefUse[$rname] = New-Object 'System.Collections.Generic.HashSet[string]' }
      [void]$engineRefUse[$rname].Add($cf.BaseName)
    }
  }
  $allowedLibKeys = @('forcedInduction', 'injection', 'timingDrive', 'peakTorque', 'passingPunch', 'powertrainDurability', 'midRangeTorquePassing')
  $engineLibProblems = New-Object System.Collections.Generic.List[string]
  foreach ($ef in $engineLibFiles) {
    $ref = $ef.BaseName
    $etxt = $fileCache["./data/engines/$($ef.Name)"]
    $escRef = [regex]::Escape($ref)
    if ($etxt -notmatch "registerAutoDuelEngine\(\{\s*id:\s*'$escRef'") { $engineLibProblems.Add("${ref}: registerAutoDuelEngine id must equal the file name") }
    if ($etxt -notmatch "(?m)^\s{8}id:\s*'$escRef'") { $engineLibProblems.Add("${ref}: engines[0].id must equal the file name") }
    if ($etxt -notmatch "(?m)^\s{8}fuelType:\s*'(petrol|diesel|hybrid)'") { $engineLibProblems.Add("${ref}: invalid or missing fuelType") }
    if ($etxt -notmatch '(?m)^\s{8}hp:\s*\d+') { $engineLibProblems.Add("${ref}: missing numeric hp") }
    foreach ($req in @('peakTorque', 'powertrainDurability', 'midRangeTorquePassing')) {
      if ($etxt -notmatch "(?m)^\s{10}${req}:") { $engineLibProblems.Add("${ref}: missing required engine-owned key $req") }
    }
    foreach ($km in [regex]::Matches($etxt, '(?m)^\s{10}(\w+):')) {
      if ($allowedLibKeys -notcontains $km.Groups[1].Value) { $engineLibProblems.Add("${ref}: '$($km.Groups[1].Value)' is car-owned and must not live in a shared engine file") }
    }
    if (-not $engineRefUse.ContainsKey($ref)) { $engineLibProblems.Add("${ref}: not referenced by any car (orphan shared engine)") }
  }
  if ($engineLibProblems.Count -gt 0) { Add-Fail "Shared engine library problems: $($engineLibProblems -join '; ')" }
  else { Add-Pass "All $($engineLibFiles.Count) shared engine files valid & referenced ($(@($engineRefUse.Values | ForEach-Object { $_.Count } | Measure-Object -Sum).Sum) engineRef links)" }

  $codeOwners = @{}
  foreach ($cf in $carFiles) {
    $ctxt = $fileCache["./data/cars/$($cf.Name)"]
    $starts = [regex]::Matches($ctxt, "(?m)^ {6}\{\s*\r?\n {8}id:\s*'([^']+)'")
    for ($si = 0; $si -lt $starts.Count; $si++) {
      $segEnd = if ($si + 1 -lt $starts.Count) { $starts[$si + 1].Index } else { $ctxt.Length }
      $seg = $ctxt.Substring($starts[$si].Index, $segEnd - $starts[$si].Index)
      if ($seg -match '(?m)^ {8}engineRef:') { continue }
      $cm = [regex]::Match($seg, "k:\s*'engineCode',\s*v:\s*'([^']+)'")
      if (-not $cm.Success) { continue }
      foreach ($tok in ($cm.Groups[1].Value -split '[\s/\u00b7,()]+')) {
        if ($tok -cmatch '^[A-Z]{4}$') {
          if (-not $codeOwners.ContainsKey($tok)) { $codeOwners[$tok] = @{} }
          $codeOwners[$tok][$cf.BaseName] = $true
        }
      }
    }
  }
  # Engine codes whose data conflicts between cars and needs a factual review before they can be shared.
  # Listed codes only print a WARN; every other duplicated code fails validation.
  $engineCodeReviewList = @('CJSB')
  $dupEngineCodes = @($codeOwners.GetEnumerator() | Where-Object { $_.Value.Count -gt 1 -and $engineCodeReviewList -notcontains $_.Key } | ForEach-Object { "$($_.Key) (cars: $($_.Value.Keys -join ', '))" })
  foreach ($rv in @($codeOwners.GetEnumerator() | Where-Object { $_.Value.Count -gt 1 -and $engineCodeReviewList -contains $_.Key })) {
    Write-Host "WARN: engine code $($rv.Key) differs between cars ($($rv.Value.Keys -join ', ')) - review data, then move it to data/engines/" -ForegroundColor Yellow
  }
  if ($dupEngineCodes.Count -gt 0) { Add-Fail "Same engine code used by 2+ cars without a shared data/engines file: $($dupEngineCodes -join '; ')" }
  else { Add-Pass "Zero duplicated engine codes across cars outside the shared engine library" }

  $calOut = & powershell -ExecutionPolicy Bypass -File './scripts/calibrate-scores.ps1' -Check 2>&1
  if ($LASTEXITCODE -ne 0) {
    Add-Fail "Objective metric calibration check failed:`n$($calOut -join "`n")"
  } else {
    Add-Pass "All engines pass objective metric calibration (tolerance <= 0.2)"
  }
  if ($sportLeak.Count -gt 0) { Add-Fail "English Sportfahrwerk leak in: $($sportLeak -join ', ')" }
  else { Add-Pass "Zero English Sportfahrwerk leaks" }

  if ($deTermLeaks.Count -gt 0) { Add-Fail "German wording leaks (use Kofferraum/Reihenvierzylinder/Sauger/Sportfahrwerk): $($deTermLeaks -join '; ')" }
  else { Add-Pass "Zero German Boot/Inline-4/NA/Track wording leaks" }

  if ($insLeak.Count -gt 0) { Add-Fail "Country-specific KH/TK/VK string found in: $($insLeak -join ', ')" }
  else { Add-Pass "Zero country-specific KH/TK/VK strings" }

  $legacyHits = @()
  foreach ($f in ($cssModules + $appJsModules + @('./data/manifest.js') + @($carFiles | ForEach-Object { "./data/cars/$($_.Name)" }))) {
    if (-not $fileCache.ContainsKey($f)) { continue }
    $txt = $fileCache[$f]
    if ($txt -match 'dark-soft|light-soft|isEnthusiast|CAR_ENTHUSIAST_IDS|outlookEnthusiast') {
      $legacyHits += $f
    }
  }
  if ($legacyHits.Count -gt 0) { Add-Fail "Deprecated soft-theme or enthusiast references found in: $($legacyHits -join ', ')" }
  else { Add-Pass "Zero deprecated soft-theme or enthusiast references" }

  # 8. Summary
  $webpFiles = @(Get-ChildItem -LiteralPath './assets' -Filter '*.webp' -File)
  $thumbFiles = @(Get-ChildItem -LiteralPath './assets/thumbs' -Filter '*.webp' -File)
  $dupWebpCount = @(($webpFiles | Get-FileHash -Algorithm SHA256 | Group-Object Hash | Where-Object { $_.Count -gt 1 } | ForEach-Object { $_.Count })).Count

  Write-Host ("SUMMARY: Roster={0} cars | WebPs={1} (duplicate/placeholder groups={2}) | Thumbs={3} | InDepth={4}/{0} cars ({5})" -f `
    $rosterIds.Count, $webpFiles.Count, $dupWebpCount, $thumbFiles.Count, $inDepthIds.Count, ($inDepthIds -join ', ')) -ForegroundColor Cyan

  if ($failures.Count -gt 0) {
    Write-Host "VALIDATION FAILED ($($failures.Count) issue(s))" -ForegroundColor Red
    exit 1
  }
  Write-Host "VALIDATION PASSED" -ForegroundColor Green
  exit 0
} finally {
  Pop-Location
}
