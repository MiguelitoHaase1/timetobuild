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

## Scroll Animation Patterns (Learnings from Opening Section)

### Architecture Overview

The Opening section uses a sophisticated scroll-driven animation with **sticky positioning** and **framer-motion transforms**:

```
ScrollSequence (130vh container)
└── Sticky Inner (position: sticky, top: 0, height: 100vh)
    ├── Video (animated scale + border-radius)
    ├── Hero Text (animated opacity + translateY)
    └── Dark Overlay (for text contrast)

Hero Section (follows ScrollSequence)
└── Motion Wrapper (animated translateY, -15vh margin)
```

### Key Implementation Patterns

**1. Scroll Container Heights**
- Use `130vh` for scroll sequence container to provide animation room
- The sticky inner stays at `100vh` (viewport height)
- Extra 30vh allows next section to slide up smoothly
- Adjust based on desired animation duration

**2. Sticky Positioning Pattern**
```tsx
<div style={{ height: '130vh' }}>  {/* Scroll room */}
  <div style={{ position: 'sticky', top: 0, height: '100vh' }}>
    {/* Pinned content that animates as you scroll */}
  </div>
</div>
```

**3. Framer Motion Scroll Hooks**
```tsx
const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ['start start', 'end start']
})

// Map scroll progress to animation values
const videoScale = useTransform(scrollYProgress, [0.3, 0.6], [1, 0.65])
```

**4. Slide-Up Next Section**
```tsx
// In parent component (App.tsx)
const heroY = useTransform(scrollYProgress, [0, 0.8], [80, 0])

<motion.div style={{ y: heroY, marginTop: '-15vh' }}>
  <NextSection />
</motion.div>
```

### UX Refinements We Discovered

**Text Contrast Over Video**
- Add dark gradient overlay: `rgba(0, 0, 0, 0.4)` over video
- Use white text with `drop-shadow-lg` for readability
- Overlay gradient: darker at top/bottom, lighter in middle

**Animation Timing**
- Stop animations at 80% progress (not 100%) to avoid glitches
- Use gentler transforms (80px not 100px) for smoother feel
- Maintain breathing room between sections (-15vh not -30vh)

**Performance Optimizations**
- Only animate GPU-accelerated properties: `transform`, `opacity`
- Add `willChange: 'transform, opacity'` to animated elements
- Never animate `width`, `height`, `top`, `left` directly
- Use `scale` instead of width/height changes

**Accessibility**
- Check `prefers-reduced-motion` and return static values
- Return `motionValue()` with static positions when reduced motion enabled
- Don't use early returns in hooks (violates Rules of Hooks)

### Testing Scroll Animations

**Test Utilities** (`src/test/test-utils.tsx`):
```tsx
// Create controllable MotionValues for testing
export function createMockMotionValue<T>(initial: T): MotionValue<T>

// Mock reduced motion preference
export function mockReducedMotion(enabled: boolean): () => void
```

**Unit Tests** - Test hook logic:
- Phase transitions at correct scroll percentages
- Transform value ranges (opacity 1→0, y 0→-50, etc.)
- Reduced motion returns static values
- Ref warnings in tests are expected (not production issues)

**E2E Tests** - Test actual behavior:
- Visual state at key scroll positions (0%, 30%, 60%, 100%)
- Animation smoothness (no jumps or glitches)
- Reduced motion compliance

### Common Issues & Solutions

**Issue: "Glitchy snap" at end of animation**
- **Cause:** Animation completes at 100% with no buffer
- **Solution:** Stop at 80% progress `[0, 0.8]` instead of `[0, 1]`

**Issue: "Text hard to read over video"**
- **Cause:** Insufficient contrast between text and video
- **Solution:** Dark gradient overlay + white text + drop-shadow

**Issue: "Next section too far down"**
- **Cause:** Scroll container height too tall
- **Solution:** Reduce from 250vh → 130vh and use negative margin

**Issue: "Rendered fewer hooks than expected"**
- **Cause:** Early return before calling all hooks
- **Solution:** Call all hooks first, conditionally return values after

### When to Use This Pattern

**Good For:**
- Hero sections with immersive media
- Storytelling sequences that need pacing
- Revealing content progressively
- Creating focus before transitioning

**Avoid When:**
- Content needs immediate access (accessibility)
- Mobile-first design (scroll hijacking feels bad on mobile)
- Users need quick scanning (don't trap them)

### Future Adaptations

When adapting this pattern for other sections:
1. Keep scroll container height reasonable (100-150vh)
2. Test on mobile - may need simpler version
3. Always include reduced motion fallback
4. Maintain at least 10-15vh breathing room between sections
5. Stop animations at 70-80% to avoid glitches

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
