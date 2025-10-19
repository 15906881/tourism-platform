import { resolveTemplate } from '@/src/renderer/resolveTemplate';

export default async function Page({ params }: { params: { slug?: string[] } }) {
  const slug = params.slug ?? [];
  // Convention: /site/<template-key>/... -> first segment is the template key
  const templateKey = slug[0] || 'shared-landing';
  const Render = resolveTemplate(templateKey);

  // TODO: fetch data by slug if needed
  return <Render />;
}
