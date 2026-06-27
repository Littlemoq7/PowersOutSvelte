/**
 * Svelte action: fades an image in once it finishes loading, so it appears
 * smoothly instead of popping. Pair it with width/height attributes on the
 * image so the layout reserves the right space first (no jump/snap).
 *
 * Usage:  <img use:fadeInOnLoad src=... width=... height=... />
 *
 * @param {HTMLImageElement} node
 */
export function fadeInOnLoad(node) {
  // Already decoded (e.g. served from cache) — show immediately, no flash.
  if (node.complete && node.naturalWidth > 0) {
    node.classList.add("img-loaded");
    return {};
  }

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    node.classList.add("img-loaded");
    return {};
  }

  node.classList.add("img-fade-in");

  // On error, still reveal the element so a broken image isn't left invisible.
  const reveal = () => node.classList.add("img-loaded");
  node.addEventListener("load", reveal);
  node.addEventListener("error", reveal);

  return {
    destroy() {
      node.removeEventListener("load", reveal);
      node.removeEventListener("error", reveal);
    },
  };
}
