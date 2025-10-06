'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { trpcCall } from '@/lib/trpcCall';

const THEMES = ['midnight', 'sunrise', 'ocean', 'forest'] as const;
type ThemeId = (typeof THEMES)[number];

export default function ChooseTheme() {
  const r = useRouter();
  const [selected, setSelected] = React.useState<ThemeId>('midnight');
  const [loading, setLoading] = React.useState(false);

  const onChangeTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.currentTarget.value as ThemeId);
  };

  const onNext = async () => {
    setLoading(true);
    try {
      await trpcCall('onboarding.setTheme', { themeId: selected });
      r.push('/onboarding/business-info');
    } catch (err: unknown) {
      if (err instanceof Error) console.error(err);
      else console.error('Unknown error', err);
      alert('Failed to save theme');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-xl font-semibold">Pick a theme</h1>

      <fieldset className="space-y-2">
        <legend className="sr-only">Theme</legend>
        {THEMES.map((id) => (
          <label key={id} className="flex items-center gap-2">
            <input
              type="radio"
              name="theme"
              value={id}
              checked={selected === id}
              onChange={onChangeTheme}
            />
            <span className="capitalize">{id}</span>
          </label>
        ))}
      </fieldset>

      <button
        onClick={onNext}
        disabled={loading}
        className="px-4 py-2 rounded bg-black text-white disabled:opacity-50"
      >
        {loading ? 'Saving…' : 'Next'}
      </button>
    </main>
  );
}
