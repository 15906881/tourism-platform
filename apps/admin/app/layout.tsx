import "@weblynk/tokens/css";
export const metadata = {
  title: 'Tourism Platform - Admin',
  description: 'Admin dashboard for tourism platform management'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
