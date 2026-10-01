import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Reusable hook to handle scroll reveal animations across all pages.
 * Re-scans for .reveal elements on route changes.
 */
export default function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      const revealEls = document.querySelectorAll('.reveal:not(.is-visible)');
      if (!revealEls.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08 }
      );

      revealEls.forEach((el) => observer.observe(el));
    }, 60);

    return () => clearTimeout(timer);
  }, [location.pathname]);
}
