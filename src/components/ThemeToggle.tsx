"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggle = () => {
    if (!resolvedTheme) return; // safety check
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      className="p-2 rounded-full text-slate-600 hover:text-blue-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-blue-400 dark:hover:bg-slate-800 transition-colors"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}