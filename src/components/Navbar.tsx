"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#publications", label: "Publications" },
  { href: "#contact", label: "Contact" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const close = () => setOpen(false);
  const toggle = () => setOpen((o) => !o);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/70 backdrop-blur-xl transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/70">
      <div className="relative w-full">
        <div className="relative z-[60] mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a
            href="#home"
            onClick={close}
            className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600 transition-transform hover:scale-105 dark:from-blue-400 dark:to-indigo-400"
          >
            Dr. Saqlain Raza<span className="text-blue-600 dark:text-blue-400">.</span>
          </a>

          <div className="hidden items-center space-x-8 text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 md:flex lg:space-x-10">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <ThemeToggle />
            <div className="flex gap-3 border-r border-slate-200 px-4 dark:border-slate-700">
              <a
                href="https://orcid.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-slate-400 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
              >
                ORCID
              </a>
              <a
                href="https://www.scopus.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-slate-400 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
              >
                SCOPUS
              </a>
            </div>
            <a
              href="#contact"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/20 transition-all hover:-translate-y-0.5 hover:shadow-slate-900/40 dark:bg-blue-600 dark:shadow-blue-900/20 dark:hover:shadow-blue-900/40"
            >
              Hire me
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={toggle}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="rounded-lg bg-slate-100 p-2 text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-slate-800 dark:text-white"
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              {open ? <X className="h-6 w-6" strokeWidth={2} aria-hidden /> : <Menu className="h-6 w-6" strokeWidth={2} aria-hidden />}
            </button>
          </div>
        </div>

        {open ? (
          <>
            <button
              type="button"
              className="fixed inset-0 z-40 bg-black/40 md:hidden"
              aria-label="Close menu"
              onClick={close}
            />
            <div
              id="mobile-nav"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              className="absolute left-0 right-0 top-full z-50 max-h-[min(70vh,calc(100dvh-4.5rem))] overflow-y-auto border-b border-slate-200 bg-white/98 shadow-xl backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/98 md:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-6">
                {NAV_LINKS.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={close}
                    className="rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-widest text-slate-600 transition-colors hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                  >
                    {label}
                  </a>
                ))}
                <div className="mt-4 flex gap-4 border-t border-slate-200 pt-4 dark:border-slate-700">
                  <a
                    href="https://orcid.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={close}
                    className="text-sm font-bold text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    ORCID
                  </a>
                  <a
                    href="https://www.scopus.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={close}
                    className="text-sm font-bold text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    SCOPUS
                  </a>
                </div>
                <a
                  href="#contact"
                  onClick={close}
                  className="mt-4 rounded-full bg-slate-900 py-3 text-center text-sm font-bold text-white dark:bg-blue-600"
                >
                  Hire me
                </a>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </nav>
  );
}
