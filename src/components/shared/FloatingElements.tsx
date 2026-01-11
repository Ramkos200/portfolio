"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface DotPosition {
  left: number;
  top: number;
  delay: number;
  duration: number;
  yRange: number;
  xRange: number;
}

export function FloatingElements() {
  const [dotPositions, setDotPositions] = useState<DotPosition[]>([]);

  useEffect(() => {
    const positions: DotPosition[] = [];

    for (let i = 0; i < 15; i++) {
      positions.push({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: i * 0.5,
        duration: 15 + Math.random() * 20,
        yRange: Math.random() * 100 - 50,
        xRange: Math.random() * 100 - 50,
      });
    }

    setDotPositions(positions);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Large organic blobs */}
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-1/2 -right-20 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            y: [0, 30, 0],
            x: [0, -40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <motion.div
          className="absolute -bottom-32 left-1/2 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            y: [0, -20, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />

        {/* Small floating dots - Only render on client */}
        {dotPositions.length > 0
          ? dotPositions.map((dot, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-emerald-300/40 rounded-full"
                style={{
                  left: `${dot.left}%`,
                  top: `${dot.top}%`,
                }}
                initial={{ opacity: 0.3 }}
                animate={{
                  y: [0, dot.yRange, 0],
                  x: [0, dot.xRange, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: dot.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: dot.delay,
                }}
              />
            ))
          : null}
      </div>
    </div>
  );
}
