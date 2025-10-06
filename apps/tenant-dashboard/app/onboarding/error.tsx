'use client';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => console.error('[onboarding error]', error), [error]);
  return (
    <div style={{ padding: 24 }}>
      <h2>Onboarding hit a snag</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
