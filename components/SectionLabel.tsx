export function SectionLabel({ children }: { children: string }) {
  return (
    <p className="font-mono text-[10px] font-medium uppercase tracking-[0.32em] text-chrome-silver">
      {children}
    </p>
  );
}
