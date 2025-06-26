
import { useEffect, useRef } from "react";

/**
 * Hook to animate elements in on scroll using Intersection Observer.
 * Adds 'animate-fade-in' and 'opacity-100' on reveal.
 * Usage: attach `ref={elRef}` and className="opacity-0 transition-all duration-1000" to your element.
 */
export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    node.classList.remove("animate-fade-in");
    node.classList.add("opacity-0"); // Hide initially
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("animate-fade-in", "opacity-100");
          node.classList.remove("opacity-0");
          observer.disconnect();
        }
      },
      { threshold: 0.20 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return ref;
}
