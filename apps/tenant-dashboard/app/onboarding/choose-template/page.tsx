'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { trpcCall } from '@/lib/trpcFetch';

type Tmpl = { id: string; name: string; vertical: string };

export default function ChooseTemplate() {
  const r = useRouter();
  const [templates, setTemplates] = useState<Tmpl[]>([]);
  const [selected, setSelected] = useState<string>('');

  useEffect(() => {
    (async () => {
      try {
        const m = await import('@weblynk/templates');
        const anyExports = Object.values(m);
        const flat = anyExports.flat().filter((x:any)=>x?.id && x?.name && x?.vertical);
        setTemplates(flat as Tmpl[]);
      } catch (e) { console.error('Templates import failed', e); }
    })();
  }, []);

  async function onNext() {
    const tenantId = (document.cookie.split('; ').find(c=>c.startsWith('onb_tenant='))||'').split('=').pop();
    if (!tenantId) return alert('Missing onboarding session');
    await trpcCall('onboarding.setTemplate', { tenantId, templateId: selected });
    r.push('/onboarding/choose-theme');
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Choose a template</h1>
      <div className="grid grid-cols-2 gap-3">
        {templates.map(t=>(
          <button key={t.id} onClick={()=>setSelected(t.id)}
            className={'border p-4 rounded text-left ' + (selected===t.id?'border-blue-600':'border-gray-300')}>
            <div className="font-medium">{t.name}</div>
            <div className="text-sm text-gray-500">{t.vertical}</div>
          </button>
        ))}
      </div>
      <div className="flex justify-end">
        <button disabled={!selected} onClick={onNext} className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50">Continue</button>
      </div>
    </div>
  );
}
