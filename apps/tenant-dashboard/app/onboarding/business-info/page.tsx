'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { trpcCall } from '@/lib/trpcCall';

type Form = {
  legalName: string;
  phone: string;
  country: string;
};

export default function BusinessInfoPage() {
  const r = useRouter();
  const [form, setForm] = React.useState<Form>({ legalName: '', phone: '', country: '' });
  const [saving, setSaving] = React.useState(false);

  const setField =
    (key: keyof Form) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let value = e.currentTarget.value;
      if (key === 'country') value = value.toUpperCase();
      setForm((f) => ({ ...f, [key]: value }));
    };

  // Require legalName and 2-letter country; phone optional
  const isValid = form.legalName.trim().length > 0 && /^[A-Z]{2}$/.test(form.country.trim());

  const onSave = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!isValid || saving) return;

    setSaving(true);
    try {
      await trpcCall('onboarding.setBusinessInfo', {
        legalName: form.legalName.trim(),
        phone: form.phone.trim(),
        country: form.country.trim().toUpperCase(),
      });
      r.push('/onboarding/payment');
    } catch (err: unknown) {
      if (err instanceof Error) console.error(err);
      else console.error('Unknown error', err);
      alert('Failed to save business info');
    } finally {
      setSaving(false);
    }
  };

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Business info</h1>

      <form onSubmit={onSave} className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 sm:col-span-2">
          <span className="text-sm">Legal name</span>
          <input
            name="legalName"
            autoComplete="organization"
            className="border rounded px-3 py-2"
            value={form.legalName}
            onChange={setField('legalName')}
            placeholder="Acme Inc"
            required
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm">Phone</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className="border rounded px-3 py-2"
            value={form.phone}
            onChange={setField('phone')}
            placeholder="+1 555 444 3456"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm">Country</span>
          <input
            name="country"
            className="border rounded px-3 py-2 uppercase"
            value={form.country}
            onChange={setField('country')}
            placeholder="US"
            maxLength={2}
            required
          />
        </label>

        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={!isValid || saving}
            className="px-4 py-2 rounded bg-black text-white disabled:opacity-50"
          >
            {saving ? 'Saving…' : 'Save & continue'}
          </button>
        </div>
      </form>
    </main>
  );
}
