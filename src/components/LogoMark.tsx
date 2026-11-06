// The forked Y: two paths that merge into one focused direction.
export default function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" focusable="false">
      <path d="M11 9 L20 20 M29 9 L20 20" stroke="#94a6bf" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M20 20 L20 31" stroke="#6195ff" strokeWidth="3.6" strokeLinecap="round" />
    </svg>
  );
}
