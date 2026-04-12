"use client";

export function AmbientBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-chrome-void"
      aria-hidden
    >
      {/* Chrome ambient orbs — slow-drifting silver light */}
      <div className="aurora-orb absolute -left-[20%] -top-[10%] h-[70vh] w-[70vh] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.04)_0%,transparent_70%)] blur-[100px]" />
      <div className="aurora-orb-2 absolute -right-[15%] top-[20%] h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.03)_0%,transparent_70%)] blur-[120px]" />
      <div className="aurora-orb-3 absolute -bottom-[20%] left-[30%] h-[50vh] w-[50vh] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.025)_0%,transparent_70%)] blur-[100px]" />

      {/* Subtle grid overlay */}
      <div className="grid-overlay absolute inset-0 opacity-30" />

      {/* Noise texture */}
      <div
        className="noise-overlay absolute inset-0 opacity-[0.12]"
        aria-hidden
      />

      {/* Top edge light */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,transparent_40%,rgba(0,0,0,0.7)_100%)]" />
    </div>
  );
}
