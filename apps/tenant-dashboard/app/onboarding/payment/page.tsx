'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { trpcCall } from '@/lib/trpcFetch';

export default function Payment() {
  const r = useRouter(); const [slug, setSlug] = useState('');
  async function onStartTrial() {
    const tenantId = (document.cookie.split('; ').find(c=>c.startsWith('onb_tenant='))||'').split('=').pop();
    if (!tenantId) return alert('Missing onboarding session');
    await trpcCall('onboarding.startTrial', { tenantId, planId: 'starter' });
    const fin = await trpcCall<{tenantId:string;slug:string},{ok:boolean;siteUrl:string}>(
      'onboarding.finalize',
      { tenantId, slug }
    );
    if (fin.ok) r.push('/dashboard');
  }
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Start free trial</h1>
      <input className="border p-2 w-full" placeholder="Choose a subdomain (my-biz)" value={slug} onChange={e=>setSlug(e.target.value)} />
      <button disabled={!slug} onClick={onStartTrial} className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50">Start Trial</button>
    </div>
  );
}
