import { useEffect } from "react";
import { useReducedMotion } from "motion/react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function usePortfolioEffects() {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const lenis = new Lenis({ autoRaf: true, duration: 1.05, smoothWheel: true });
    const anchorClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
      const anchor = (event.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
      const hash = anchor?.getAttribute("href");
      if (!hash || hash === "#") return;
      const target = document.getElementById(hash.slice(1));
      if (!target) return;
      event.preventDefault();
      // Lenis reads the root scroll-padding-top, also used by native anchors.
      lenis.scrollTo(target, { onComplete: () => {
        history.replaceState(null, "", hash);
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      } });
    };
    const stop = () => lenis.stop();
    const start = () => lenis.start();
    document.addEventListener("click", anchorClick);
    document.addEventListener("portfolio:gallery-open", stop);
    document.addEventListener("portfolio:gallery-close", start);
    return () => {
      document.removeEventListener("click", anchorClick);
      document.removeEventListener("portfolio:gallery-open", stop);
      document.removeEventListener("portfolio:gallery-close", start);
      lenis.destroy();
    };
  }, [reduced]);

  useEffect(() => {
    const selectors = ".section-heading > *, .featured-project, .service-card, .process-timeline, .process-step, .expertise-card, #experience > .grid > div, .experience-card, .achievements-heading, .achievement-card, #about > .grid > *, .contact-panel, .contact-heading, .contact-option, .contact-response, footer";
    const targets = document.querySelectorAll<HTMLElement>(selectors);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute("data-reveal", "visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });
    targets.forEach((target, index) => {
      target.dataset.reveal = "pending";
      target.style.setProperty("--reveal-delay", `${index % 2 * 85}ms`);
      observer.observe(target);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduced || !matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine)").matches) return;
    const cleanup: (() => void)[] = [];
    document.querySelectorAll<HTMLElement>(".button-primary").forEach((button) => {
      const move = (event: PointerEvent) => {
        const rect = button.getBoundingClientRect();
        button.style.transform = `translate(${(event.clientX - rect.left - rect.width / 2) * .12}px, ${(event.clientY - rect.top - rect.height / 2) * .16}px)`;
      };
      const leave = () => { button.style.transform = "translate(0,0)"; };
      button.style.transition = "transform 250ms cubic-bezier(.2,.65,.3,1)";
      button.addEventListener("pointermove", move);
      button.addEventListener("pointerleave", leave);
      cleanup.push(() => { button.removeEventListener("pointermove", move); button.removeEventListener("pointerleave", leave); leave(); });
    });
    document.querySelectorAll<HTMLElement>(".expertise-card").forEach((card) => {
      const move = (event: PointerEvent) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
        card.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
      };
      card.addEventListener("pointermove", move);
      cleanup.push(() => card.removeEventListener("pointermove", move));
    });
    return () => cleanup.forEach((fn) => fn());
  }, [reduced]);
}
