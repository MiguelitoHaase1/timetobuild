import posthog from 'posthog-js';

// PostHog configuration
export const posthogConfig = {
  apiKey: import.meta.env.VITE_POSTHOG_KEY || '',
  apiHost: import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com',
  options: {
    // Privacy-first configuration
    capture_pageview: false, // We'll handle page views manually
    persistence: 'localStorage' as const, // Less invasive than cookies

    // Autocapture configuration - automatically track clicks on buttons and links
    autocapture: true,

    // Session recording configuration
    disable_session_recording: false,
    enable_recording_console_log: false, // Don't record console logs for privacy
    session_recording: {
      recordCrossOriginIframes: false,
      maskAllInputs: true, // Mask form inputs for privacy
      maskTextSelector: '[data-private]', // Mask elements with this attribute
      sampling: {
        minimumDuration: 2000, // Only record sessions longer than 2 seconds
      },
    },

    // Disable in development
    loaded: (ph: { opt_out_capturing: () => void }) => {
      if (import.meta.env.DEV) {
        ph.opt_out_capturing();
      }
    },
  },
};

// Event names - centralized constants for type safety
export const ANALYTICS_EVENTS = {
  // CTA interactions
  CTA_CLICK_EMAIL: 'cta_click_email',
  CTA_TOGGLE_DETAILS: 'cta_toggle_details',
  CTA_OPEN_TEAM_MODAL: 'cta_open_team_modal',

  // Team modal
  TEAM_MODAL_OPEN: 'team_modal_open',
  TEAM_MODAL_CLOSE: 'team_modal_close',
  TEAM_CLICK_LINKEDIN: 'team_click_linkedin',

  // Demo modal
  DEMO_MODAL_OPEN: 'demo_modal_open',
  DEMO_MODAL_CLOSE: 'demo_modal_close',
  DEMO_CLICK_EMAIL: 'demo_click_email',

  // Examples section
  EXAMPLES_CAROUSEL_NAV: 'examples_carousel_nav',
  EXAMPLES_CAPABILITY_CLICK: 'examples_capability_click',

  // Impact prototypes
  IMPACT_SECTION_TOGGLE: 'impact_section_toggle',
  IMPACT_SPOTLIGHT_NAV: 'impact_spotlight_nav',

  // Section tracking
  SECTION_VIEW: 'section_view',
  SECTION_TIME: 'section_time',

  // Page views
  PAGE_VIEW: 'page_view',
} as const;

// Event property types for better type safety
export interface AnalyticsEventProperties {
  // Common properties
  [key: string]: string | number | boolean | undefined;

  // Specific event properties
  location?: string; // Component location
  email?: string; // Email address (for tracking which email was clicked)
  direction?: 'next' | 'prev'; // Carousel direction
  capability?: string; // Capability name
  section?: string; // Section name
  expanded?: boolean; // Toggle state
  linkedin_url?: string; // LinkedIn profile URL
  team_member?: string; // Team member name
  seconds?: number; // Time spent in seconds (for section_time events)
}

// Initialize PostHog
export function initPostHog(): void {
  if (!posthogConfig.apiKey) {
    console.warn('PostHog API key not found. Analytics disabled.');
    return;
  }

  posthog.init(posthogConfig.apiKey, {
    api_host: posthogConfig.apiHost,
    ...posthogConfig.options,
  });
}

// Helper to check if PostHog is enabled
export function isAnalyticsEnabled(): boolean {
  return !!posthogConfig.apiKey && !import.meta.env.DEV;
}
