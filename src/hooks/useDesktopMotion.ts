import { useSyncExternalStore } from "react";
import { useReducedMotion } from "motion/react";

const query = "(min-width: 1024px) and (hover: hover) and (pointer: fine)";
const subscribe = (callback: () => void) => {
  const media = window.matchMedia(query);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
};
const snapshot = () => window.matchMedia(query).matches;
const serverSnapshot = () => false;

export default function useDesktopMotion() {
  const desktop = useSyncExternalStore(subscribe, snapshot, serverSnapshot);
  const reduced = useReducedMotion();
  return desktop && !reduced;
}
