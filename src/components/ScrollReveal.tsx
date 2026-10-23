import { useEffect, type ReactNode } from "react";

const SCROLL_TARGETS = [
  "section",
  "main > *",
  "footer",
  "article",
  '[class~="card-glow"]',
  '[class*="rounded-2xl"]',
  "h1",
  "h2",
  "h3",
  "h4",
  "p",
  "li",
  "label",
  "span:not(:empty):not([aria-hidden='true'])",
  "button",
  "a",
  "input",
  "select",
  "textarea",
].join(", ");

export function ScrollReveal({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (!("IntersectionObserver" in window) || !("MutationObserver" in window)) {
      return;
    }

    const observedTargets = new Set<Element>();
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          target.classList.toggle("is-in-view", isIntersecting);
          target.classList.toggle("is-visible", isIntersecting);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -4% 0px" },
    );

    const observeTargets = (root: ParentNode) => {
      if (root instanceof Element && root.matches(SCROLL_TARGETS)) {
        observedTargets.add(root);
        root.classList.add("scroll-motion-target");
        intersectionObserver.observe(root);
      }

      root.querySelectorAll(SCROLL_TARGETS).forEach((target) => {
        if (observedTargets.has(target)) return;
        observedTargets.add(target);
        target.classList.add("scroll-motion-target");
        intersectionObserver.observe(target);
      });
    };

    observeTargets(document.body);

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) observeTargets(node);
        });
      });
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      intersectionObserver.disconnect();
      observedTargets.clear();
    };
  }, []);

  return children;
}
