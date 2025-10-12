'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function BusinessInfo() {
  const r = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName,  setLastName]  = useState('');
  const [loading,   setLoading]   = useState(false);

  async function onNext() {
    setLoading(true);
    try {
      // (Optional): later we can persist to a stub endpoint.
      // For now, just advance.
      r.push('/onboarding/payment');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="p-8 space-y-4">
      <h1 className="text-5xl font-bold mb-6">Business info</h1>
      <div className="space-x-2">
        <input
          className="border p-2"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          className="border p-2"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <button
        onClick={onNext}
        disabled={loading}
        className="px-4 py-2 rounded bg-black text-white disabled:opacity-50"
      >
        {loading ? 'Continuing…' : 'Continue'}
      </button>
    </main>
  );
}
