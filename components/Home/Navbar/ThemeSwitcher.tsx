"use client";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeSwitcher() {
  const {  resolvedTheme, setTheme } = useTheme();

  // Use resolvedTheme to avoid SSR mismatch
  const currentTheme = resolvedTheme || "dark";

  return (
    <button
      onClick={() =>
        setTheme(currentTheme === "dark" ? "light" : "dark")
      }
      className="p-2 rounded-lg hover:bg-accent transition"
    >
      {currentTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
