'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [loading, setLoading] = useState(false);
  const r = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const resp = await fetch('/api/onboarding/register', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email, company }),
      });
      const json = await resp.json();
      if (!resp.ok || !json?.ok) throw new Error(json?.error || 'Registration failed');
      r.push('/onboarding/choose-vertical');
    } catch (err) {
      console.error(err);
      alert('Sign-up failed. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input
        type="email"
        required
        placeholder="work email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <input
        type="text"
        required
        placeholder="company"
        value={company}
        onChange={e => setCompany(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button disabled={loading} className="px-4 py-2 rounded bg-black text-white disabled:opacity-50">
        {loading ? 'Creating…' : 'Create account'}
      </button>
    </form>
  );
}
