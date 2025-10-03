'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { trpcCall } from '@/lib/trpcFetch';

const VERTICALS = ['service-booking','hospitality','professional','food'] as const;

export default function ChooseVertical() {
  const r = useRouter();
  const [selected, setSelected] = useState<string>('');

  async function onNext() {
    const tenantId = (document.cookie.split('; ').find(c=>c.startsWith('onb_tenant='))||'').split('=').pop();
    if (!tenantId) return alert('Missing onboarding session');
    await trpcCall('onboarding.setVertical', { tenantId, vertical: selected });
    r.push('/onboarding/choose-template');
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Choose your vertical</h1>
      <div className="grid grid-cols-2 gap-3">
        {VERTICALS.map(v=>(
          <button key={v} onClick={()=>setSelected(v)}
            className={'border p-4 rounded ' + (selected===v?'border-blue-600':'border-gray-300')}>
            {v}
          </button>
        ))}
      </div>
      <div className="flex justify-end">
        <button disabled={!selected} onClick={onNext} className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50">Continue</button>
      </div>
    </div>
  );
}
