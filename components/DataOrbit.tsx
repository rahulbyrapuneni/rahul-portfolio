"use client";

import { motion, useReducedMotion } from "motion/react";

const nodes = [
  { label: "SQL", x: "10%", y: "24%" },
  { label: "Python", x: "68%", y: "12%" },
  { label: "Snowflake", x: "78%", y: "62%" },
  { label: "Power BI", x: "14%", y: "72%" },
];

export default function DataOrbit() {
  const reduced = useReducedMotion();

  return (
    <div className="project-frame relative aspect-square w-full max-w-[500px] overflow-hidden rounded-[2rem] border border-white/10">
      <div className="grid-overlay absolute inset-0 opacity-60" />
      <motion.div
        className="absolute inset-[17%] rounded-full border border-white/15"
        animate={reduced ? {} : { rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-[30%] rounded-full border border-dashed border-blue-300/30"
        animate={reduced ? {} : { rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />
      <div className="glass absolute left-1/2 top-1/2 grid h-36 w-36 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full text-center">
        <div>
          <p className="text-xs tracking-[.18em] text-[var(--muted)]">FROM DATA TO</p>
          <p className="mt-2 text-xl font-semibold">Business Value</p>
        </div>
      </div>

      {nodes.map((node, index) => (
        <motion.div
          key={node.label}
          className="glass absolute rounded-2xl px-4 py-3 text-sm font-semibold"
          style={{ left: node.x, top: node.y }}
          animate={reduced ? {} : { y: [0, -9, 0] }}
          transition={{
            duration: 3.5 + index * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.25,
          }}
        >
          {node.label}
        </motion.div>
      ))}
    </div>
  );
}
