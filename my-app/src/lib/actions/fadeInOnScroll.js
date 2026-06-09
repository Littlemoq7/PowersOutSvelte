/**
 * Svelte action: fades + slides an element in the first time it scrolls into view.
 *
 * Usage:  <div use:fadeInOnScroll>...</div>
 *         <div use:fadeInOnScroll={{ threshold: 0.3, once: false }}>...</div>
 *
 * @param {HTMLElement} node
 * @param {{ threshold?: number, once?: boolean }} [options]
 */
export function fadeInOnScroll(node, options = {}) {
  const { threshold = 0.15, once = true } = options;

  // Respect users who prefer reduced motion — show immediately, no animation.
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    node.classList.add("is-visible");
    return {};
  }

  node.classList.add("fade-in-on-scroll");

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          if (once) observer.unobserve(node);
        } else if (!once) {
          node.classList.remove("is-visible");
        }
      }
    },
    { threshold }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    },
  };
}
