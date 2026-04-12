"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

function starStyle(index: number) {
  const x = ((index * 47) % 1000) / 10;
  const y = ((index * 83) % 1000) / 10;
  const size = 0.8 + (index % 3) * 0.6;
  const duration = 2.2 + (index % 7) * 0.35;
  const delay = ((index * 13) % 40) / 10;
  return { x, y, size, duration, delay };
}

export function Starfield() {
  const [count, setCount] = useState(80);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const apply = () => setCount(mq.matches ? 40 : 120);
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
              s.size > 1.2
                ? "0 0 6px 1px rgba(255,255,255,0.25)"
                : "0 0 3px rgba(255,255,255,0.4)",
          }}
          initial={{ opacity: 0.1 }}
          animate={{ opacity: [0.1, 0.7, 0.15, 0.6, 0.1] }}
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
