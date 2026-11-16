---
name: retro-distill
description: >-
  Distills recent lessons, recurring user corrections, project conventions, and
  repeated multi-step procedures from git history and the current conversation.
  Trigger this skill when the user invokes /retro-distill or asks to distill,
  retro, or capture recent lessons into project rules or skills.
---

# Retro Distill (`/retro-distill`)

Use this workflow to extract high-signal project rules and reusable workflows from recent work without bloating `GEMINI.md`.

## Step 1: Inspect Recent History & Context

1. **Inspect Git History:**
   - Run `git log -n 15 -p` (or `git log -n 15 --stat` followed by targeted `git show <commit>` if diffs in `app.js` are very large) to review the last 15 commits and their diffs.
   - *Windows Fallback:* If `git` is not on the default shell `PATH`, locate GitHub Desktop's bundled Git (`Get-ChildItem "$env:LOCALAPPDATA\GitHubDesktop\app-*\resources\app\git\cmd\git.exe" | Select-Object -Last 1`) or inspect `.git/logs/HEAD` and recent modified files.
2. **Inspect Conversation History:**
   - Review the current session's user prompts, corrections, and repeated multi-step tasks (and `<appDataDir>\brain\<conversation-id>\.system_generated\logs\transcript.jsonl` if needed).
3. **Read Current Baseline:**
   - Read `GEMINI.md`, `AGENTS.md`, and list existing skills in `.agents/skills/` so you never propose duplicate rules or workflows.

## Step 2: Classify Findings (Invariants vs. Workflows)

Separate every candidate lesson into one of two categories:

1. **Invariants -> `GEMINI.md` (or `AGENTS.md` for domain-specific roster/UI state):**
   - Short, high-signal, single-line `"Always ..."` or `"Never ..."` constraints.
   - Must prevent a recurring mistake, enforce a naming/schema/translation invariant, or guard against a regression.
   - Keep `GEMINI.md` lean: merge with existing bullets where possible and prune obsolete or redundant lines.
2. **Workflows -> `.agents/skills/<skill-name>/SKILL.md`:**
   - Repeatable multi-step procedures, checklists, verification scripts, or runbooks (3+ steps).
   - Must include valid YAML frontmatter (`name: <skill-name>` in kebab-case and a third-person `description` stating what the skill does and when to trigger it).

## Step 3: Present Diff Proposal & Wait for Approval

Before creating or modifying **any** file (`GEMINI.md`, `AGENTS.md`, or `.agents/skills/<skill-name>/SKILL.md`):

1. **Summary of Findings:** Briefly list the recurring corrections or patterns spotted in `git log -n 15` and the current conversation.
2. **Proposed Diffs:**
   - Show a concise unified diff (` ```diff `) for proposed `GEMINI.md` (and/or `AGENTS.md`) invariant additions.
   - Show the proposed path and full content (or diff) for any new or updated `.agents/skills/<skill-name>/SKILL.md` workflow files.
3. **Approval Gate:** **STOP and wait for explicit user approval** before writing or editing any files.

## Step 4: Apply & Verify (Post-Approval Only)

Once the user approves the proposal:
1. Apply the approved edits to `GEMINI.md` / `AGENTS.md` and/or create the approved `.agents/skills/<skill-name>/SKILL.md` files.
2. Verify that every new `SKILL.md` starts with valid `---` YAML frontmatter containing `name` and `description`.
