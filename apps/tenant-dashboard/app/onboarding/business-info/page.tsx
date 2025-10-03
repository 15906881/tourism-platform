'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { trpcCall } from '@/lib/trpcFetch';

export default function BizInfo() {
  const r = useRouter();
  const [phone, setPhone] = useState(''); const [address, setAddress] = useState('');
  async function onNext() {
    const tenantId = (document.cookie.split('; ').find(c=>c.startsWith('onb_tenant='))||'').split('=').pop();
    if (!tenantId) return alert('Missing onboarding session');
    await trpcCall('onboarding.setContent', { tenantId, content: { phone, address } });
    r.push('/onboarding/payment');
  }
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Business info</h1>
      <input className="border p-2 w-full" placeholder="Phone" value={phone} onChange={e=>setPhone(e.target.value)} />
      <input className="border p-2 w-full" placeholder="Address" value={address} onChange={e=>setAddress(e.target.value)} />
      <div className="flex justify-end"><button onClick={onNext} className="px-4 py-2 bg-blue-600 text-white rounded">Continue</button></div>
    </div>
  );
}
