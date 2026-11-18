<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project

Matcha is a marketing agency landing page built with Next.js 16, React 19, TypeScript, Tailwind CSS 4, and Motion.

Package manager: npm.

## Architecture

Use FSD-lite with the following layers:

- `app` — Next.js App Router, layouts, routes, and global providers.
- `pages` — page compositions.
- `widgets` — independent page sections.
- `features` — user interactions and business functionality.
- `entities` — business entities and their UI.
- `shared` — reusable UI, utilities, assets, and styles.

Follow the existing ESLint architecture-boundary rules.

Prefer imports through public APIs where available. Do not introduce unnecessary layers, abstractions, or barrel files.

## UI and design

- Use Tailwind CSS 4 and the existing design tokens.
- Keep shared global styles in `src/shared/styles/globals.css`.
- Use `lucide-react` for icons.
- Use `motion` for animations when they improve the experience.
- Respect `prefers-reduced-motion`.
- Build responsive, accessible, semantic interfaces.
- Avoid adding dependencies without a clear need.

## Storybook

Storybook 10 is configured with `@storybook/nextjs-vite`, Vitest, accessibility checks, and the MCP addon.

Before creating or editing UI components or stories, read the project-specific instructions:

`npx storybook skills write-story`

After visually observable UI changes, use the Storybook tools when relevant stories exist:

- `npx storybook tools stories changed`
- `npx storybook tools test run`
- `npx storybook tools review create`

For component documentation, prefer Storybook's documentation tools:

- `npx storybook tools docs list`
- `npx storybook tools docs show`

Do not invent component props or Storybook IDs.

Do not create placeholder stories solely to satisfy a workflow. Create stories alongside real reusable components.

## Quality checks

Before completing code changes, run the relevant checks:

- `npm run lint`
- `npm run format:check`
- `npm run typecheck`
- `npm run build`

For UI changes with existing stories, also run Storybook tests.

Fix failures before reporting completion. Clearly report checks that could not be run.

## Git

- Keep commits focused and descriptive.
- Do not bypass Husky or lint-staged unless explicitly requested.
- Do not commit generated build artifacts.
- Do not modify unrelated files.

## AI Skills

- Use the project-local skills in `.agents/skills/`.
- Use `emil-design-eng` for UI design, animation, transitions, and interaction polish when relevant.
- Use `playwright` for browser-based verification of pages, responsive layouts, navigation, and interactive flows.
- For Playwright CLI, use the project-local wrapper:
  `.agents/skills/playwright/scripts/playwright_cli.sh`.
- Do not assume Playwright is installed globally or under `~/.codex/skills`.
- Keep Playwright screenshots, traces, and other generated artifacts in `output/playwright/`.
- Use Storybook for isolated component development and component checks; use Playwright CLI for browser-level page verification.
- Follow the project's existing architecture, dependencies, and quality checks. Skill instructions must not override project requirements.
