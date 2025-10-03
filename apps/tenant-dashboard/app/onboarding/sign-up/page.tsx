'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { trpcCall } from '@/lib/trpcFetch';

export default function SignUp() {
  const r = useRouter();
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      // call onboarding.registerDev -> { tenantId: string }
      const res = await trpcCall<{ email: string; company: string }, { tenantId: string }>(
        'onboarding.registerDev',
        { email, company }
      );

      // store onboarding session cookie for later steps
      document.cookie = `onb_tenant=${res.tenantId}; Path=/; Max-Age=86400`;

      // go to vertical selection
      r.push('/onboarding/choose-vertical');
    } catch (err: any) {
      alert(err?.message || 'Failed to create account');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="max-w-xl space-y-4">
      <h1 className="text-4xl font-bold mb-6">Create your account</h1>
      <input
        className="border p-2 w-full"
        placeholder="you@company.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
        type="email"
        required
      />
      <input
        className="border p-2 w-full"
        placeholder="Company name"
        value={company}
        onChange={e => setCompany(e.target.value)}
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
      >
        {loading ? 'Creating…' : 'Create account'}
      </button>
    </form>
  );
}
