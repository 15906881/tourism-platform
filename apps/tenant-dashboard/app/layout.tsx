import { TRPCProvider } from '../lib/trpc-provider'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto p-6">
        <TRPCProvider>{children}</TRPCProvider>
      </body>
    </html>
  )
}
