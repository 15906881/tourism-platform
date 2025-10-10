'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function SignoutButton({ className = '' }: { className?: string }) {
  const [busy, setBusy] = useState(false);
  const r = useRouter();

  const click = async () => {
    setBusy(true);
    await fetch('/api/auth/signout', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
    });
    r.replace('/');
  };

  return (
    <button onClick={click} disabled={busy} className={className}>
      {busy ? 'Signing out…' : ''}
    </button>
  );
}