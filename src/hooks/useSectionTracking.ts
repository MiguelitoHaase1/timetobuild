import { useEffect, useRef } from 'react';
import { useAnalytics } from './useAnalytics';
import { ANALYTICS_EVENTS } from '@/lib/analytics';

/**
 * Hook to track when a section comes into view and how long users spend on it
 * @param sectionName - Unique identifier for the section (e.g., 'hero', 'examples')
 * @returns Ref to attach to the section element
 */
export function useSectionTracking(sectionName: string) {
  const { trackEvent } = useAnalytics();
  const startTime = useRef<number>();
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Section came into view
          startTime.current = Date.now();
          trackEvent(ANALYTICS_EVENTS.SECTION_VIEW, { section: sectionName });
        } else if (startTime.current) {
          // Section left view - track time spent
          const timeSpent = Math.round((Date.now() - startTime.current) / 1000);

          // Only track if user spent at least 1 second
          if (timeSpent >= 1) {
            trackEvent(ANALYTICS_EVENTS.SECTION_TIME, {
              section: sectionName,
              seconds: timeSpent,
            });
          }

          startTime.current = undefined;
        }
      },
      {
        threshold: 0.5, // Section is considered "viewed" when 50% visible
        rootMargin: '0px' // No margin around viewport
      }
    );

    observer.observe(element);

    // Cleanup on unmount
    return () => {
      observer.disconnect();

      // Track final time if user is still viewing when component unmounts
      if (startTime.current) {
        const timeSpent = Math.round((Date.now() - startTime.current) / 1000);
        if (timeSpent >= 1) {
          trackEvent(ANALYTICS_EVENTS.SECTION_TIME, {
            section: sectionName,
            seconds: timeSpent,
          });
        }
      }
    };
  }, [sectionName, trackEvent]);

  return elementRef;
}
