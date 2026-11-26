---
name: spec
description: >-
  Converts a raw voice-dictated brain dump or rough feature idea into a
  compact, structured AutoDuel feature specification and feeds it directly into
  the GEMINI.md Assumptions & Clarification Gate. Trigger this skill when the
  user invokes /spec or pastes a raw, unstructured, or voice-dictated prompt.
---

# Spec (`/spec`)

Transform raw, stream-of-consciousness or voice-dictated user requests into a crisp AutoDuel specification before touching any code.

## Step 1: Clean & Structure Raw Input

- Strip filler words, spoken hesitations, mid-sentence self-corrections (always keep the final corrected intent), and speech-to-text transcription typos (e.g., car model names, engine codes, CSS/DOM terms, or German/Russian automotive terms).
- Preserve 100% of the functional requirements, UI nuances, and edge cases expressed in the brain dump.

## Step 2: Output a Compact Feature Spec (Max 25 Lines)

Render the cleaned specification using this exact 4-part template (strictly capped at **25 lines total**):

1. **Goal (1 sentence):** What user-visible behavior or data changes in AutoDuel.
2. **Inputs & State:** Exact `CAR_ROSTER` / `subStats` / `dossier` fields, `UI_TRANSLATIONS` keys (`en` / `de` / `ru`), CSS variables/selectors in `styles.css`, or DOM elements in `index.html` / `app.js` affected.
3. **Acceptance Criteria (3–5 bullets):** Concrete, deterministic conditions that `verify-loop` (Stage A syntax, Stage B schema/Desktop `1440x900` browser assertions, Stage C path integrity) will verify.
4. **Out of Scope (1–2 bullets):** Explicit non-goals to prevent scope creep or unintended layout/roster changes.

## Step 3: Feed Into `GEMINI.md` Assumptions & Clarification Gate

Immediately below the 25-line Feature Spec, output the mandatory [GEMINI.md](../../GEMINI.md) **Assumptions & Clarification Gate** block:

1. **Assumptions (Max 5 bullets):** Concrete technical assumptions inferred from the codebase.
2. **Clarifying Questions (Max 3):** High-leverage questions only (or state *"No blocking questions."*).
3. **Proposed Plan (Max 5 bullets):** Exact files to modify and the `/verify-loop` verification step.

**STOP and wait for explicit user approval** before creating or editing any files.
