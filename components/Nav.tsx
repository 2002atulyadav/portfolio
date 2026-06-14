"use client";
import { useState } from "react";
import { navItems } from "@/data/content";
import { useScrollSpy } from "@/lib/useScrollSpy";

export default function Nav() {
  const active = useScrollSpy(navItems);
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-linesoft bg-paper/80 backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto flex max-w-wrap items-center justify-between gap-6 px-[var(--pad)] py-[1.05rem]">
        <a href="#home" className="font-display text-2xl font-medium italic">
          AY
        </a>

        <nav className="hidden items-center gap-[1.6rem] md:flex">
          {navItems.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`relative pb-[3px] text-[0.95rem] capitalize transition-colors after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-rust after:transition-all after:duration-300 ${
                active === id
                  ? "text-ink after:w-full"
                  : "text-inksoft after:w-0 hover:text-ink"
              }`}
            >
              {id}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="whitespace-nowrap rounded-full border border-rust px-[1.15rem] py-2 text-[0.95rem] text-rust transition-colors hover:bg-rust hover:text-paper"
          >
            Say Hello
          </a>
          <button
            aria-label="Toggle menu"
            className="text-2xl text-ink md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-3 border-t border-line px-[var(--pad)] py-4 md:hidden">
          {navItems.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className={`capitalize ${active === id ? "text-rust" : "text-inksoft"}`}
            >
              {id}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
