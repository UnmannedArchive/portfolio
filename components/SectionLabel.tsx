export function SectionLabel({ children }: { children: string }) {
  return (
    <p className="flex items-center gap-3 font-mono text-[10px] font-medium uppercase tracking-[0.32em] text-accent/80">
      <span className="h-px w-8 bg-accent/40" />
      {children}
    </p>
  );
}
