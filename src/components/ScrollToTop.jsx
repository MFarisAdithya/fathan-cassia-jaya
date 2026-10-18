import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop ensures that page navigation always resets the window scroll position
 * to the very top (0, 0), or smoothly scrolls to a target section when a hash (#anchor) is provided.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  // Disable browser automatic scroll restoration on SPA navigation
  useEffect(() => {
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      try {
        window.history.scrollRestoration = 'manual';
      } catch {
        // ignore
      }
    }
  }, []);

  useEffect(() => {
    // If navigating to an anchor hash (e.g. #produk, #faq)
    if (hash) {
      const targetId = hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 80);
        return () => clearTimeout(timer);
      }
    }

    // Default: Always reset scroll position to top instantly
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    } catch {
      window.scrollTo(0, 0);
    }

    // Confirm scroll position on next animation frame to prevent micro-jumps from layout shifts
    const frame = requestAnimationFrame(() => {
      try {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      } catch {
        window.scrollTo(0, 0);
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}
