import { notFound } from 'next/navigation';

interface Props {
  params: {
    slug: string[];
  };
}

export default function SubdomainPage({ params }: Props) {
  const subdomain = params.slug[0];
  
  if (!subdomain) {
    notFound();
  }

  return (
    <div>
      <h1>Welcome to {subdomain}.weblynk.app</h1>
      <p>This is the site for subdomain: {subdomain}</p>
    </div>
  );
}
