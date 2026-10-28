import { useEffect, useRef, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { motion } from "motion/react";
import Icon from "./Icon";
import type { Gallery } from "../types";

export default function GalleryModal({ gallery, setGallery }: { gallery: Gallery; setGallery: Dispatch<SetStateAction<Gallery | null>> }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);
  const [failedImage, setFailedImage] = useState<string | null>(null);
  const [retry, setRetry] = useState(0);
  const change = (direction: number) => setGallery((current) => current ? { ...current, index: (current.index + direction + current.images.length) % current.images.length } : current);
  const currentImage = gallery.images[gallery.index];

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.dispatchEvent(new Event("portfolio:gallery-open"));
    dialogRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setGallery(null);
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault();
        const direction = event.key === "ArrowRight" ? 1 : -1;
        setGallery((current) => current ? { ...current, index: (current.index + direction + current.images.length) % current.images.length } : current);
      }
      if (event.key === "Tab") {
        const buttons = dialogRef.current?.querySelectorAll<HTMLButtonElement>("button");
        if (!buttons?.length) return;
        const first = buttons[0];
        const last = buttons[buttons.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.dispatchEvent(new Event("portfolio:gallery-close"));
      document.removeEventListener("keydown", handleKey);
      previousFocus?.focus({ preventScroll: true });
    };
  }, [setGallery]);

  return (
    <motion.div ref={dialogRef} className="gallery-backdrop" role="dialog" aria-modal="true" aria-label={`${gallery.title} gallery`}
      data-lenis-prevent initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .2 }}
      onClick={(event) => { if (event.target === event.currentTarget) setGallery(null); }}
      onTouchStart={(event) => { touchX.current = event.touches[0].clientX; }}
      onTouchEnd={(event) => {
        if (touchX.current === null) return;
        const delta = event.changedTouches[0].clientX - touchX.current;
        if (Math.abs(delta) > 45) change(delta < 0 ? 1 : -1);
        touchX.current = null;
      }}>
      <button type="button" className="absolute right-5 top-5 icon-button" onClick={() => setGallery(null)} aria-label="Close gallery"><Icon name="x" /></button>
      <button type="button" className="gallery-navigation icon-button left-3 sm:left-5" onClick={() => change(-1)} aria-label="Previous image"><Icon name="arrow" className="h-4 w-4 rotate-180" /></button>
      <div className="mx-auto w-full max-w-7xl">
        {failedImage === currentImage ? <div className="flex min-h-64 flex-col items-center justify-center gap-5 rounded-lg border border-white/10 bg-[#0d192b]"><p className="text-sm text-slate-300">The image couldn&apos;t load.</p><button className="button-secondary" onClick={() => { setFailedImage(null); setRetry((count) => count + 1); }}>Try again</button></div> : <motion.img key={`${currentImage}-${retry}`} src={currentImage} alt={`${gallery.title} screen ${gallery.index + 1}`} className="gallery-image" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .25 }} onError={() => setFailedImage(currentImage)} />}
        <div className="gallery-caption" aria-live="polite"><span>{gallery.title}</span><span className="text-[#476181]">/</span><span>{gallery.index + 1} / {gallery.images.length}</span></div>
        <div className="gallery-thumbnails">{gallery.images.map((image, index) => <button key={image} type="button" aria-label={`View screen ${index + 1}`} aria-current={index === gallery.index ? "true" : undefined} onClick={() => setGallery((current) => current ? { ...current, index } : current)} />)}</div>
      </div>
      <button type="button" className="gallery-navigation icon-button right-3 sm:right-5" onClick={() => change(1)} aria-label="Next image"><Icon name="arrow" className="h-4 w-4" /></button>
    </motion.div>
  );
}
