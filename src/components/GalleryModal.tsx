import Icon from "./Icon";
import type { Dispatch, SetStateAction } from "react";
import type { Gallery } from "../types";

export default function GalleryModal({ gallery, setGallery }: { gallery: Gallery; setGallery: Dispatch<SetStateAction<Gallery | null>> }) {
return (
<div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={`${gallery.title} gallery`}>
          <button type="button" className="absolute right-4 top-4 z-10 icon-button bg-black/40" onClick={() => setGallery(null)} aria-label="Close gallery">
            <Icon name="x" />
          </button>
          <button
            type="button"
            className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white transition hover:bg-white/10 sm:left-6"
            onClick={() => setGallery((current) => current ? { ...current, index: (current.index - 1 + current.images.length) % current.images.length } : current)}
            aria-label="Previous image"
          >
            <span className="rotate-180"><Icon name="arrow" /></span>
          </button>
          <div className="mx-auto w-full max-w-7xl">
            <img src={gallery.images[gallery.index]} alt={`${gallery.title} screen ${gallery.index + 1}`} className="mx-auto max-h-[82vh] w-auto max-w-full rounded-xl border border-white/10 object-contain shadow-2xl" />
            <div className="mt-4 flex items-center justify-center gap-3 text-xs text-slate-400">
              <span>{gallery.title}</span>
              <span className="text-slate-700">•</span>
              <span>{gallery.index + 1} / {gallery.images.length}</span>
            </div>
          </div>
          <button
            type="button"
            className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white transition hover:bg-white/10 sm:right-6"
            onClick={() => setGallery((current) => current ? { ...current, index: (current.index + 1) % current.images.length } : current)}
            aria-label="Next image"
          >
            <Icon name="arrow" />
          </button>
        </div>
);
}
