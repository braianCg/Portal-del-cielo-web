import { useEffect } from 'react';

/**
 * Custom hook to apply smooth scroll-reveal effects on elements.
 * Adheres to performance guidelines: caches relative sibling indices via WeakMap
 * to avoid layout thrashing and DOM query overload during IntersectionObserver triggers.
 */
export const useRevealObserver = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll(
      '.mision-text, .mision-img, .invasion-header, .card, .min-card, .encuentro-item, .primera-vez, .oracion-section .container > *'
    );

    const revealSiblingIndices = new WeakMap();
    const parentRevealGroups = new Map();

    revealElements.forEach(el => {
      el.classList.add('reveal');
      const parent = el.parentElement;
      if (parent) {
        if (!parentRevealGroups.has(parent)) {
          parentRevealGroups.set(parent, []);
        }
        parentRevealGroups.get(parent).push(el);
      }
    });

    parentRevealGroups.forEach(children => {
      children.forEach((child, idx) => {
        revealSiblingIndices.set(child, idx);
      });
    });

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = revealSiblingIndices.get(entry.target) || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, idx * 80);
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach(el => revealObserver.observe(el));

    return () => {
      revealObserver.disconnect();
    };
  }, []);
};
