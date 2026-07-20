import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { useT } from '@/i18n/useT';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const t = useT();

  if (!toggleTheme) return null;

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={t('themeToggle.ariaLabel')}
      className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white/80 p-2 text-gray-700 shadow-sm transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0056D2] focus-visible:ring-offset-2 dark:border-gray-800 dark:bg-black/40 dark:text-gray-200 dark:hover:bg-black/20"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
