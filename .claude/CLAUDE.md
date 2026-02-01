# Time to Build - Project Instructions

## Project Overview
**Domain:** time2build.ai
**Purpose:** AI Empowerment consulting website - helping mid-market companies capture 10x productivity gains
**Tech Stack:** Vite + React 18 + TypeScript + TailwindCSS + Vitest + Playwright

## Visual Identity (MUST FOLLOW)

Reference `/Users/michaelhaase/AI/Projects/webapps/timetobuild/visual-identity.md` for complete brand guidelines.

### Brand Colors
- **Coral Primary:** `#D97757` - Use for CTAs, accents, highlights
- **Cream Background:** `#FAF9F6` - Main page background
- **Cream Panel:** `#F0EFEB` - Panel backgrounds
- **Text Primary:** `#1A1A1A` - Main text
- **Text Secondary:** `#6B6B6B` - Secondary text
- **Text Muted:** `#9B9B9B` - Muted/placeholder text

### Typography
- **Headings:** Source Serif 4 (serif)
- **Body/UI:** Inter (sans-serif)
- H1: 36px, H2: 24px, Body: 17px, Small: 13px

### Components
- Border radius: 8px (buttons), 12px (cards), 16px (panels)
- Shadows: Subtle only `0 4px 12px rgba(0,0,0,0.08)`
- Transitions: 150-200ms for hover states
- Buttons: Solid coral primary, white with border secondary

## Writing Style (MUST FOLLOW)

Reference `/Users/michaelhaase/AI/Projects/webapps/timetobuild/Writing style.md` for complete guidelines.

### Core Principles
1. **Start with the answer** - Lead with conclusion
2. **Simple words** - "Use" not "utilize"
3. **Short sentences** - One idea per sentence
4. **Concrete over abstract** - Show don't tell
5. **Cut ruthlessly** - Delete "very", "really", "basically"
6. **Be human** - Use "you" and "I"
7. **Vary rhythm** - Mix sentence lengths

### Avoid
- Corporate speak (synergy, leverage, circle back)
- Hedge stacking ("It might possibly be...")
- Redundancy ("end result", "general consensus")
- Over-the-top validation or excessive praise

## Development Standards

### Test-Driven Development (TDD)
ALWAYS follow this workflow:
1. **Write failing test** - Define expected behavior first
2. **Implement minimum code** - Make test pass
3. **Refactor** - Clean up while tests stay green
4. **E2E test** - Verify full user flow

### Code Quality Requirements
- **Linting:** Code MUST pass `npm run lint` before commits
- **Type Safety:** No TypeScript errors (`tsc --noEmit`)
- **Test Coverage:** All components must have tests
- **Simplicity:** Favor clarity over cleverness

### Pre-Commit Checklist
```bash
npm run lint          # Must pass
npm test -- --run     # All tests pass
npm run build         # Build succeeds
```

### Git Workflow (CRITICAL)
1. **Code Review:** ALWAYS run `/code-review` before pushing
2. **Frequent Commits:** Commit at end of EVERY session
3. **Atomic Commits:** Small, focused commits
4. **Beads Sync:** `bd sync` at end of session

## Project Structure

```
timetobuild/
├── src/
│   ├── components/
│   │   ├── ui/                 # Reusable UI (Button, Card, etc.)
│   │   ├── forms/              # Form components
│   │   └── assessment/         # Assessment flow
│   ├── pages/                  # Route pages
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utilities, API clients
│   ├── types/                  # TypeScript types
│   └── test/                   # Test utilities
├── e2e/                        # Playwright E2E tests
├── public/                     # Static assets
```

## Core Messaging

### The Hook
**"This is a CEO conversation, not a CIO conversation."**

The 10x gap between best-in-class AI tools and corporate-approved tools isn't an IT efficiency issue—it's a competitive survival issue.

### Key Points
- Non-technical knowledge workers are doing in **days what took weeks**
- The bottleneck shifts from *doing* to *deciding*
- This isn't happening among technical early adopters
- "The future is already here. It just isn't evenly distributed yet."

### Transformation Framework
CEO mandate + bottom-up execution (like lean manufacturing)
- Timeline: 3-6 months, not years
- Start with 5-20 person teams
- World-class tools within appropriate guardrails

## Security Best Practices

### Environment Variables
- Never commit `.env` or `.env.local` files
- Use `.env.example` as template
- Prefix public vars with `VITE_`

### Headers (configured in vercel.json)
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

### Forms
- Input sanitization on all user inputs
- Rate limiting on submissions
- Validate with Zod schemas

## Available Scripts

```bash
npm run dev           # Start dev server (http://localhost:5173)
npm run build         # Build for production
npm run preview       # Preview production build
npm run lint          # Run ESLint
npm test              # Run Vitest unit tests
npm run test:ui       # Run Vitest with UI
npm run test:e2e      # Run Playwright E2E tests
npm run test:e2e:ui   # Run Playwright with UI
```

## Deployment

- Platform: Vercel
- Domain: time2build.ai (Cloudflare DNS)
- Auto-deploy from `main` branch
- Preview deployments on PRs

## Dependencies

### Core
- React 18.3.1
- React Router 6.28.0
- TypeScript 5.7.2

### Forms & Validation
- React Hook Form 7.54.2
- Zod 3.24.1

### Styling
- TailwindCSS 3.4.17
- Framer Motion 11.15.0 (animations)

### Testing
- Vitest 3.0.5 (unit tests)
- React Testing Library 16.1.0
- Playwright 1.49.1 (E2E)

## Implementation Phases

### Phase 1: Foundation ✓ (Current)
- Project setup with Vite + React + TypeScript
- TailwindCSS with brand colors
- Testing infrastructure (Vitest, Playwright)
- CI/CD pipeline
- Deploy "Coming Soon" placeholder

### Phase 2: The Story (Next)
- Reusable UI components
- Hero Section: "This is a CEO conversation"
- The Shift Section: 10x gap messaging
- The Proof Section: Testimonials + capabilities
- The Approach Section: Framework visualization

### Phase 3: Interactive Assessment
- Assessment question flow
- Scoring/recommendation logic
- Email capture for results

### Phase 4: About & Lead Capture
- About Michael section
- Form submission setup (Formspree/Resend)
- Calendly integration

### Phase 5: Polish & Launch
- Animations with Framer Motion
- SEO optimization
- Mobile responsiveness
- Performance optimization (Lighthouse 90+)
- Custom domain connection

## Notes

- **No time estimates** - Focus on what needs to be done, not how long
- **Simplicity first** - Don't over-engineer
- **User-focused** - Every design decision serves the CEO audience
- **Professional tone** - Warm but authoritative
