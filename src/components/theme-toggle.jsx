"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "@phosphor-icons/react";
import { useMounted } from "@/lib/use-mounted";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent"
    >
      {mounted && theme === "dark" ? (
        <Sun size={16} weight="light" />
      ) : (
        <Moon size={16} weight="light" />
      )}
    </button>
  );
}
