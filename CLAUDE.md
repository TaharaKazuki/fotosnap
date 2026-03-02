# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Turborepo monorepo for a photo app, with a single Next.js 16 web app and shared config packages.

## Commands

```bash
# Root-level (runs across all apps/packages via Turbo)
pnpm dev           # Start dev server (port 3000)
pnpm build         # Build everything
pnpm lint          # Lint everything (--max-warnings 0)
pnpm check-types   # Type-check everything
pnpm format        # Prettier format (ts, tsx, md files)

# Single app (from apps/web)
pnpm dev           # Next.js dev server on port 3000
pnpm build         # Build the app
pnpm lint          # Lint the app

# shadcn/ui (must run from apps/web, NOT root)
cd apps/web && pnpm dlx shadcn@latest add <component-name>
```

## Architecture

### Workspace Layout

- **apps/web** — Main Next.js 16 app (port 3000), App Router
- **packages/eslint-config** — Shared ESLint flat configs (`@repo/eslint-config`)
- **packages/typescript-config** — Shared tsconfig bases (`@repo/typescript-config`)

### Key Patterns

- **Package imports use workspace protocol**: `"@repo/eslint-config": "workspace:*"` in package.json
- **ESLint flat config (v9)**: configs in `packages/eslint-config/` export from `base.js`, `next.js`, `react-internal.js`
- **TypeScript config inheritance**: `base.json` → `nextjs.json` → app tsconfig
- **Client components** use `"use client"` directive at top of file
- **Strict TypeScript** enabled everywhere including `noUncheckedIndexedAccess`
- **shadcn/ui** components live in `apps/web/components/ui/` (new-york style, lucide icons)
- **Custom components** organized by feature: e.g. `apps/web/components/auth/`
- **Path alias**: `@/` maps to `apps/web/` root (configured in components.json and tsconfig)
- **Tailwind CSS v4** with CSS variables for theming in `apps/web/app/globals.css`
- **Tailwind class sorting**: prettier-plugin-tailwindcss configured in `apps/web/prettier.config.js`
- **`cn()` utility** (`apps/web/lib/utils.ts`): combines clsx + tailwind-merge for conditional/deduplicated class names
- **Primary color**: coral theme (`oklch(0.674 0.178 22.7)`)

### Tech Stack

- pnpm 10, Node >=18, Turborepo
- Next.js 16, React 19, TypeScript 5.9
- Tailwind CSS v4, shadcn/ui (Radix UI primitives)
- react-hook-form + zod for form validation
- ESLint 9 with Prettier integration
