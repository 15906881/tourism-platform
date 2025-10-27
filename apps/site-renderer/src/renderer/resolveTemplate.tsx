import { TEMPLATE_REGISTRY, TemplateRenderer } from '@weblynk/templates';
import type { TemplateKey } from '@weblynk/templates';

export function resolveTemplate(key: string) {
  const k = key as TemplateKey;
  const config = TEMPLATE_REGISTRY[k] ?? TEMPLATE_REGISTRY['shared-landing'];
  
  const TemplateComponent = (props: { data?: unknown }) => (
    <TemplateRenderer config={config} {...props} />
  );
  
  // Add display name for better debugging
  TemplateComponent.displayName = `Template_${key}`;
  
  return TemplateComponent;
}