"use client";

import { motion, useReducedMotion } from "motion/react";

type Props = {
  value: string;
  label: string;
};

export default function CounterCard({ value, label }: Props) {
  const reduced = useReducedMotion();

  return (
    <motion.article
      className="glass rounded-2xl p-6"
      whileHover={reduced ? {} : { y: -5, scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <p className="text-3xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm text-[var(--muted)]">{label}</p>
    </motion.article>
  );
}
