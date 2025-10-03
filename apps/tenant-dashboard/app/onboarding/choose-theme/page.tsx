'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { trpcCall } from '@/lib/trpcFetch';
const THEMES = ['gold','rose','navy'];
export default function ChooseTheme() {
  const r = useRouter(); const [selected, setSelected] = useState('');
  async function onNext() {
    const tenantId = (document.cookie.split('; ').find(c=>c.startsWith('onb_tenant='))||'').split('=').pop();
    if (!tenantId) return alert('Missing onboarding session');
    await trpcCall('onboarding.setTheme', { tenantId, themeId: selected });
    r.push('/onboarding/business-info');
  }
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Choose a color theme</h1>
      <div className="grid grid-cols-3 gap-3">
        {THEMES.map(t=>(
          <button key={t} onClick={()=>setSelected(t)}
            className={'border p-4 rounded ' + (selected===t?'border-blue-600':'border-gray-300')}>{t}</button>
        ))}
      </div>
      <div className="flex justify-end">
        <button disabled={!selected} onClick={onNext} className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50">Continue</button>
      </div>
    </div>
  );
}
