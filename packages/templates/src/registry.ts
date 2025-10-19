import { hospitalityLanding } from './configs/hospitality-landing';
import { professionalLanding } from './configs/professional-landing';
import { foodLanding } from './configs/food-landing';
import { serviceBookingLanding } from './configs/service-booking-landing';
import { sharedLanding } from './configs/shared-landing';

export const TEMPLATE_REGISTRY = {
  'hospitality-landing': hospitalityLanding,
  'professional-landing': professionalLanding,
  'food-landing': foodLanding,
  'service-booking-landing': serviceBookingLanding,
  'shared-landing': sharedLanding,
} as const;

export type TemplateKey = keyof typeof TEMPLATE_REGISTRY;
