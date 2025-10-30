import { resolveTemplate } from '@/src/renderer/resolveTemplate';

// Generate static params for all template keys
export function generateStaticParams() {
  return [
    { slug: [] }, // Root /site/
    { slug: ['shared-landing'] },
    { slug: ['hospitality-landing'] },
    { slug: ['professional-landing'] },
    { slug: ['food-landing'] },
    { slug: ['service-booking-landing'] },
  ];
}

export default async function Page({ params }: { params: { slug?: string[] } }) {
  const slug = params.slug ?? [];
  const templateKey = slug[0] || 'shared-landing';
  const Render = resolveTemplate(templateKey);

  return <Render />;
}
