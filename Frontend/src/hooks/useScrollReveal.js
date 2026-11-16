import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Reusable hook to handle scroll reveal animations across all pages.
 * - Instantly reveals all elements if prefers-reduced-motion is enabled.
 * - Immediately activates elements already within the viewport on mount to prevent CLS.
 * - Only sets up an IntersectionObserver for truly off-screen elements.
 * - Cleans up observer on route changes.
 */
export default function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    // If user prefers reduced motion, reveal all elements immediately without animation
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const revealEls = document.querySelectorAll('.reveal:not(.is-visible)');
    if (!revealEls.length) return;

    // Immediately reveal elements already inside or near the initial viewport
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const offscreenEls = [];

    revealEls.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < windowHeight * 0.95 && rect.bottom > 0) {
        el.classList.add('is-visible');
      } else {
        offscreenEls.push(el);
      }
    });

    if (!offscreenEls.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );

    offscreenEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]);
}
