"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

function starStyle(index: number) {
  const x = ((index * 47) % 1000) / 10;
  const y = ((index * 83) % 1000) / 10;
  const size = 1 + (index % 3);
  const duration = 2.2 + (index % 7) * 0.35;
  const delay = ((index * 13) % 40) / 10;
  return { x, y, size, duration, delay };
}

export function Starfield() {
  const [count, setCount] = useState(64);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const apply = () => setCount(mq.matches ? 32 : 88);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const stars = useMemo(
    () => Array.from({ length: count }, (_, i) => starStyle(i)),
    [count]
  );

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {stars.map((s, i) => (
        <motion.span
          key={`${count}-${i}`}
          className="absolute rounded-full bg-white will-change-[opacity]"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            boxShadow:
              s.size > 1
                ? "0 0 4px 1px rgba(255,255,255,0.35)"
                : "0 0 2px rgba(255,255,255,0.5)",
          }}
          initial={{ opacity: 0.15 }}
          animate={{ opacity: [0.15, 0.95, 0.2, 0.85, 0.15] }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: s.delay,
          }}
        />
      ))}
    </div>
  );
}
