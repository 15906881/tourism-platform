import React from 'react';
import { useTheme } from './ThemeProvider';

const themes = [
  { value: 'gold', label: 'Gold', colorClass: 'bg-gold-500' },
  { value: 'rose', label: 'Rose', colorClass: 'bg-rose-500' },
  { value: 'navy', label: 'Navy', colorClass: 'bg-navy-500' },
] as const;

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-2 p-4">
      {themes.map((t) => (
        <button
          key={t.value}
          onClick={() => setTheme(t.value)}
          className={`
            px-4 py-2 rounded-lg font-medium transition-all
            ${theme === t.value 
              ? 'ring-2 ring-offset-2 ring-current shadow-luxury' 
              : 'opacity-60 hover:opacity-100'
            }
            ${t.colorClass} text-white
          `}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
