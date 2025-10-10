import type { TemplateConfig } from '../types';

export const serviceBookingLanding: TemplateConfig = {
  id: 'service-booking-landing',
  name: 'Service Booking Landing Page',
  description: 'Complete landing page for tours, activities, and appointment-based services',
  vertical: 'service-booking',
  sections: [
    {
      id: 'hero',
      blocks: [
        {
          id: 'hero-1',
          type: 'Hero',
          props: {
            image: '/images/hero-service.jpg',
            headline: 'Discover Amazing Experiences',
            subheadline: 'Book tours, activities, and adventures with ease',
            ctaText: 'Browse Services',
          },
        },
      ],
    },
    {
      id: 'services',
      blocks: [
        {
          id: 'service-card-1',
          type: 'ServiceCard',
          props: {
            id: 'svc-1',
            name: 'City Walking Tour',
            description: 'Explore historic landmarks with expert guides',
            price: 49,
            duration: '3 hours',
            image: '/images/city-tour.jpg',
            category: 'Tours',
            featured: true,
          },
        },
      ],
    },
    {
      id: 'reviews',
      blocks: [
        {
          id: 'reviews-1',
          type: 'Reviews',
          props: {
            reviews: [
              {
                id: 'r1',
                name: 'Sarah Johnson',
                text: 'Amazing experience! Our guide was knowledgeable and friendly.',
                rating: 5,
              },
            ],
          },
        },
      ],
    },
    {
      id: 'contact',
      blocks: [
        {
          id: 'contact-form-1',
          type: 'ContactForm',
          props: {
            submitEndpoint: '/api/contact',
          },
        },
      ],
    },
  ],
  metadata: {
    tags: ['landing', 'services', 'booking'],
  },
};
