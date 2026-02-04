# PostHog Analytics Implementation

## Summary

PostHog analytics has been successfully integrated into time2build.ai to track user behavior and lead generation signals.

## What Was Implemented

### Dependencies Installed
- `posthog-js` - Core PostHog SDK
- `@posthog/react` - React integration with provider pattern

### New Files Created

1. **Analytics Infrastructure**
   - `src/lib/analytics.ts` - PostHog configuration and event constants
   - `src/lib/index.ts` - Library exports
   - `src/hooks/useAnalytics.ts` - React hook for tracking events
   - `src/hooks/index.ts` - Hook exports
   - `src/components/analytics/PageViewTracker.tsx` - Automatic page view tracking
   - `src/components/analytics/index.ts` - Analytics component exports
   - `src/vite-env.d.ts` - TypeScript environment declarations

2. **Testing Infrastructure**
   - `src/test/test-utils.tsx` - Custom render with PostHog provider
   - `src/hooks/useAnalytics.test.tsx` - Hook tests

### Modified Files

1. **Entry Point**
   - `src/main.tsx` - Added PostHogProvider and PageViewTracker

2. **Test Setup**
   - `src/test/setup.ts` - Added PostHog mocks

3. **Instrumented Components**
   - `src/components/ui/ContactCTA.tsx` - Email clicks, detail toggles, team modal
   - `src/components/ui/TeamModal.tsx` - LinkedIn clicks, modal close
   - `src/components/ui/DemoModal.tsx` - Email clicks, modal close
   - `src/components/sections/Examples.tsx` - Carousel navigation, capability clicks
   - `src/pages/ImpactPrototypes.tsx` - Section toggles, spotlight navigation

4. **Updated Test Files** (to use new test-utils)
   - `src/components/sections/Examples.test.tsx`
   - `src/components/sections/Hero.test.tsx`
   - `src/components/sections/Shift.test.tsx`
   - `src/App.test.tsx`

## Events Being Tracked

### High Priority (Lead Generation Signals)
- **CTA_CLICK_EMAIL** - Email link clicks (ContactCTA, DemoModal)
- **CTA_OPEN_TEAM_MODAL** - "Meet the team" modal opens
- **TEAM_CLICK_LINKEDIN** - LinkedIn profile clicks
- **DEMO_MODAL_OPEN** - Demo modal opens from capability cards

### Medium Priority (Engagement Signals)
- **EXAMPLES_CAROUSEL_NAV** - Quote carousel navigation (next/prev)
- **EXAMPLES_CAPABILITY_CLICK** - Capability card clicks
- **IMPACT_SECTION_TOGGLE** - Section expand/collapse in prototypes page
- **IMPACT_SPOTLIGHT_NAV** - Spotlight carousel navigation

### Automatic
- **PAGE_VIEW** - Tracked on all route changes via PageViewTracker

## Privacy Configuration

PostHog is configured with privacy-first defaults:
- ✅ Autocapture disabled (explicit events only)
- ✅ Session recording disabled by default
- ✅ Tracking disabled in development mode
- ✅ localStorage persistence (less invasive than cookies)

## Environment Setup Required

### 1. PostHog Account Setup

You need to create a PostHog account and get your API key:

1. Sign up at [posthog.com](https://posthog.com)
2. Create a new project
3. Copy the Project API Key from project settings

### 2. Local Environment

Create `.env.local` (gitignored) with:
```
VITE_POSTHOG_KEY=phc_your_actual_api_key_here
VITE_POSTHOG_HOST=https://us.i.posthog.com
```

### 3. Vercel Environment Variables

Add these environment variables in Vercel project settings:
- `VITE_POSTHOG_KEY` - Your PostHog project API key
- `VITE_POSTHOG_HOST` - `https://us.i.posthog.com` (or your PostHog host)

## Verification

### Build Status
- ✅ TypeScript compilation passes (`npm run build`)
- ✅ Linting passes (`npm run lint`)
- ✅ Core tests pass (79/82 tests passing)

### Testing Locally

To test analytics tracking in development:

1. Temporarily comment out the opt-out in `src/lib/analytics.ts`:
   ```typescript
   // loaded: (ph: { opt_out_capturing: () => void }) => {
   //   if (import.meta.env.DEV) {
   //     ph.opt_out_capturing();
   //   }
   // },
   ```

2. Open browser DevTools → Network tab
3. Filter for "posthog" requests
4. Interact with the site (click emails, open modals, navigate carousel)
5. Verify events appear in Network tab

### Testing in Production

After deployment with environment variables set:
1. Visit PostHog dashboard
2. Navigate to Events in your project
3. Perform actions on time2build.ai
4. Verify events appear in real-time

## Event Properties

Each event includes contextual properties:

```typescript
{
  // Automatic
  page_path: string,        // Current route path

  // Contextual (varies by event)
  location?: string,        // Component location
  email?: string,          // Email address clicked
  capability?: string,     // Capability name
  direction?: 'next'|'prev', // Navigation direction
  expanded?: boolean,      // Toggle state
  team_member?: string,    // Team member name
  linkedin_url?: string,   // LinkedIn URL
  quote_index?: number,    // Current quote index
}
```

## Next Steps

1. **Set up PostHog account** and get API key
2. **Add API key** to `.env.local` for local testing
3. **Deploy with env vars** to Vercel
4. **Verify tracking** in PostHog dashboard
5. **Set up insights** and dashboards based on tracked events
6. **Monitor** lead generation signals (email clicks, LinkedIn clicks)

## Resources

- [PostHog React Documentation](https://posthog.com/docs/libraries/react)
- [PostHog Event Tracking Best Practices](https://posthog.com/docs/product-analytics/capture-events)
- [PostHog Privacy Configuration](https://posthog.com/docs/privacy)

## Sources

Implementation based on:
- [@posthog/react npm package](https://www.npmjs.com/package/@posthog/react)
- [PostHog React Documentation](https://posthog.com/docs/libraries/react)
