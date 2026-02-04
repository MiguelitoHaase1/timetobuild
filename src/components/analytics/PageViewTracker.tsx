import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAnalytics } from '../../hooks';

/**
 * Component that tracks page views on route changes
 * Should be placed inside Router but outside Routes
 */
export function PageViewTracker() {
  const location = useLocation();
  const { trackEvent, EVENTS } = useAnalytics();

  useEffect(() => {
    // Track page view on route change
    trackEvent(EVENTS.PAGE_VIEW, {
      page_path: location.pathname,
      page_search: location.search,
      page_hash: location.hash,
    });
  }, [location, trackEvent, EVENTS]);

  return null; // This component doesn't render anything
}
