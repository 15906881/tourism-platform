import Link from 'next/link';
import { TRPCProvider } from '../lib/trpc-provider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto p-6">
        <header className="mb-6 flex items-center justify-end">
          <form method="post" action="/api/auth/signout?redirectTo=/">
            <button className="text-sm underline">Sign out</button>
          </form>
        </header>

        <TRPCProvider>{children}</TRPCProvider>
      </body>
    </html>
  );
}
