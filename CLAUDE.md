# CLAUDE.md

## Purpose
This repo is a sandbox for testing an AI coding agent (harness testing). Keep it minimal and boring.

## Layout
- `src/` — implementation code
- `test/` — vitest tests, one file per source file (`test/<file>.test.ts`)

## Commands
- `npm ci` — install dependencies
- `npm run lint` — eslint
- `npm run typecheck` — tsc --noEmit
- `npm test` — vitest run
- `npm run check` — runs lint, typecheck, test in that order

## Conventions
- Write small, pure functions with named exports.
- Every exported function has a one-line JSDoc and tests in `test/<file>.test.ts`.
- Do not add new dependencies unless the ticket asks for it.

## Definition of done
`npm run check` passes.

## Do not
Do not modify `.github/`, `CLAUDE.md`, or `package.json` scripts unless the ticket asks for it.
