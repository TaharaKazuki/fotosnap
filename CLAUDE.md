# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Turborepo monorepo with two Next.js 16 apps and shared packages, scaffolded from create-turbo.

## Commands

```bash
# Root-level (runs across all apps/packages via Turbo)
pnpm dev           # Start all apps in dev mode
pnpm build         # Build everything
pnpm lint          # Lint everything (--max-warnings 0)
pnpm check-types   # Type-check everything
pnpm format        # Prettier format (ts, tsx, md files)

# Single app (from apps/web or apps/docs)
pnpm dev           # Next.js dev server (web: 3000, docs: 3001)
pnpm build         # Build single app
pnpm lint          # Lint single app

# UI package (from packages/ui)
pnpm generate:component  # Scaffold a new React component via Turbo generator
```

## Architecture

### Workspace Layout

- **apps/web** — Main Next.js 16 app (port 3000), App Router
- **apps/docs** — Docs Next.js 16 app (port 3001), App Router
- **packages/ui** — Shared React component library (`@repo/ui`)
- **packages/eslint-config** — Shared ESLint flat configs (`@repo/eslint-config`)
- **packages/typescript-config** — Shared tsconfig bases (`@repo/typescript-config`)

### Key Patterns

- **Package imports use workspace protocol**: `"@repo/ui": "workspace:*"` in package.json
- **Direct file exports from @repo/ui** (no barrel file): `import { Button } from "@repo/ui/button"`
- **ESLint flat config (v9)**: configs in `packages/eslint-config/` export from `base.js`, `next.js`, `react-internal.js`
- **TypeScript config inheritance**: `base.json` → `nextjs.json` / `react-library.json` → app tsconfig
- **Client components** use `"use client"` directive at top of file
- **Strict TypeScript** enabled everywhere including `noUncheckedIndexedAccess`

### Tech Stack

- pnpm 9, Node >=18, Turborepo
- Next.js 16, React 19, TypeScript 5.9
- ESLint 9 with Prettier integration
- No database or backend services configured
