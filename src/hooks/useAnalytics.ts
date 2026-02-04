import { useCallback } from 'react';
import { usePostHog } from '@posthog/react';
import { useLocation } from 'react-router-dom';
import { ANALYTICS_EVENTS, type AnalyticsEventProperties } from '../lib/analytics';

/**
 * Hook for tracking analytics events with PostHog
 * Automatically includes page path with all events
 */
export function useAnalytics() {
  const posthog = usePostHog();
  const location = useLocation();

  /**
   * Track an analytics event
   * @param eventName - Event name from ANALYTICS_EVENTS
   * @param properties - Optional event properties
   */
  const trackEvent = useCallback(
    (
      eventName: typeof ANALYTICS_EVENTS[keyof typeof ANALYTICS_EVENTS],
      properties?: AnalyticsEventProperties
    ) => {
      posthog.capture(eventName, {
        ...properties,
        page_path: location.pathname,
      });
    },
    [posthog, location.pathname]
  );

  return {
    trackEvent,
    EVENTS: ANALYTICS_EVENTS,
  };
}
