export interface TemplateBlock {
  id: string;
  type: string;
  props: Record<string, any>;
}

export interface TemplateSection {
  id: string;
  blocks: TemplateBlock[];
}

export interface TemplateConfig {
  id: string;
  name: string;
  description: string;
  vertical: 'shared' | 'service-booking' | 'hospitality' | 'professional' | 'food';
  sections: TemplateSection[];
  metadata?: {
    previewImage?: string;
    author?: string;
    tags?: string[];
  };
}
