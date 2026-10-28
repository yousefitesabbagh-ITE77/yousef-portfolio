import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

export default function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduced = useReducedMotion();
  useEffect(() => {
    if (!ref.current) return;
    const element = ref.current;
    if (reduced) {
      element.textContent = value;
      return;
    }
    if (!inView) return;
    if (!/\d/.test(value)) return;
    const control = animate(0, 1, {
      duration: 1.35, ease: [0.2, 0.65, 0.3, 1],
      onUpdate: (latest) => { element.textContent = value.replace(/\d+/g, (number) => String(Math.round(Number(number) * latest))); },
    });
    return () => control.stop();
  }, [inView, reduced, value]);
  return <span ref={ref} aria-label={value}>{value}</span>;
}
