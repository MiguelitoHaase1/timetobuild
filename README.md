# Time to Build

AI Empowerment consulting - helping mid-market companies capture 10x productivity gains.

## Project Overview

**Domain:** time2build.ai
**Purpose:** Lead generation through compelling narrative + interactive AI Readiness Assessment
**Tech Stack:** Vite + React 18 + TypeScript + TailwindCSS + Vitest + Playwright

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Run tests
npm test              # Unit tests
npm run test:e2e      # E2E tests

# Build for production
npm run build
npm run preview       # Preview production build
```

## Development

### Scripts

- `npm run dev` - Start dev server at http://localhost:5173
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm test` - Run Vitest unit tests
- `npm run test:ui` - Run Vitest with UI
- `npm run test:e2e` - Run Playwright E2E tests
- `npm run test:e2e:ui` - Run Playwright with UI

### Test-Driven Development

Follow TDD workflow:
1. Write failing test
2. Implement minimum code to pass
3. Refactor while tests stay green
4. Add E2E test for user flows

### Pre-Commit Checklist

```bash
npm run lint          # Must pass
npm test -- --run     # All tests pass
npm run build         # Build succeeds
```

## Project Structure

```
timetobuild/
├── src/
│   ├── components/       # React components
│   │   ├── ui/          # Reusable UI components
│   │   ├── forms/       # Form components
│   │   └── assessment/  # Assessment flow
│   ├── pages/           # Route pages
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utilities, API clients
│   ├── types/           # TypeScript types
│   └── test/            # Test utilities
├── e2e/                 # Playwright E2E tests
├── public/              # Static assets
```

## Visual Identity

See `visual-identity.md` for complete brand guidelines.

**Colors:**
- Coral: `#D97757` (primary accent)
- Cream: `#FAF9F6` (background)
- Text: `#1A1A1A` (primary)

**Typography:**
- Headings: Source Serif 4
- Body/UI: Inter

## Deployment

- **Platform:** Vercel
- **Domain:** time2build.ai
- **Auto-deploy:** From `main` branch
- **Preview:** PR deployments

## Implementation Phases

- [x] **Phase 1:** Foundation (Vite + React + TypeScript + Testing)
- [ ] **Phase 2:** The Story (Hero, Shift, Proof, Approach sections)
- [ ] **Phase 3:** Interactive Assessment
- [ ] **Phase 4:** About & Lead Capture
- [ ] **Phase 5:** Polish & Launch

## License

Private project - All rights reserved
