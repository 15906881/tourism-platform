'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { trpcCall } from '@/lib/trpcCall';

const TEMPLATES = ['clean', 'modern', 'bold', 'minimal'] as const;
type Template = (typeof TEMPLATES)[number];

export default function ChooseTemplate() {
  const r = useRouter();
  const [template, setTemplate] = React.useState<Template>('clean');
  const [loading, setLoading] = React.useState(false);

  const onChangeTemplate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTemplate(e.currentTarget.value as Template);
  };

  const onNext = async () => {
    setLoading(true);
    try {
      await trpcCall('onboarding.setTemplate', { template });
      r.push('/onboarding/choose-theme');
    } catch (err: unknown) {
      if (err instanceof Error) console.error(err);
      else console.error('Unknown error', err);
      alert('Failed to save template');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-xl font-semibold">Choose a template</h1>

      <fieldset className="space-y-2">
        <legend className="sr-only">Template</legend>
        {TEMPLATES.map((tmp) => (
          <label key={tmp} className="flex items-center gap-2">
            <input
              type="radio"
              name="template"
              value={tmp}
              checked={template === tmp}
              onChange={onChangeTemplate}
            />
            <span className="capitalize">{tmp}</span>
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
