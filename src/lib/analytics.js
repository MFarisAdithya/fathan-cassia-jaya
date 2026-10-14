/**
 * Event Tracking Utility (Analytics Stub for GA4 & Plausible)
 * 
 * Provides unified event dispatching:
 * - Google Analytics 4 (window.gtag)
 * - Plausible Analytics (window.plausible)
 * - Safe development logging
 */

export function trackEvent(eventName, params = {}) {
  try {
    // 1. Console logging for debugging/development
    if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
      console.log(`[Analytics] trackEvent -> "${eventName}"`, params);
    }

    // 2. Google Analytics 4 (gtag.js) stub hook
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }

    // 3. Plausible Analytics stub hook
    if (typeof window !== 'undefined' && typeof window.plausible === 'function') {
      window.plausible(eventName, { props: params });
    }
  } catch (err) {
    // Graceful silent fallback so analytics never block UI actions
    console.warn('[Analytics] trackEvent failed silently:', err);
  }
}
