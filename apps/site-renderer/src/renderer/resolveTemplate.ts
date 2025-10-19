import { TEMPLATE_REGISTRY, TemplateKey } from '@weblynk/templates';
import { TemplateRenderer } from '@weblynk/templates';

export function resolveTemplate(key: string) {
  const k = key as TemplateKey;
  const config = TEMPLATE_REGISTRY[k] ?? TEMPLATE_REGISTRY['shared-landing'];
  return (props: { data?: unknown }) => <TemplateRenderer config={config} {...props} />;
}
