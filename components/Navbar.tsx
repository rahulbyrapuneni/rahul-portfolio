"use client";

import { useState } from "react";

const links = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Education", "#education"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#080d18]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="flex items-center gap-3 font-semibold">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-[#0b1220]">
            RB
          </span>
          <span className="hidden sm:inline">Rahul Byrapuneni</span>
        </a>

        <button
          className="rounded-lg border border-white/15 px-3 py-2 text-sm md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          Menu
        </button>

        <div className="hidden items-center gap-7 text-sm text-[var(--muted)] md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-white">
              {label}
            </a>
          ))}
          <a
            href="/Rahul_Byrapuneni_Resume.docx"
            className="rounded-full border border-white/15 px-4 py-2 text-white transition hover:border-white/35 hover:bg-white/5"
          >
            Resume
          </a>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#080d18] px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
            <a href="/Rahul_Byrapuneni_Resume.docx">Resume</a>
          </div>
        </div>
      )}
    </header>
  );
}
