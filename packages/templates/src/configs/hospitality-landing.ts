import type { TemplateConfig } from '../types';

export const hospitalityLanding: TemplateConfig = {
  id: 'hospitality-landing',
  name: 'Hotel & Resort Landing Page',
  description: 'Showcase rooms, amenities, and drive bookings for hotels and resorts',
  vertical: 'hospitality',
  sections: [
    {
      id: 'hero',
      blocks: [
        {
          id: 'hero-1',
          type: 'Hero',
          props: {
            image: '/images/hero-hotel.jpg',
            headline: 'Your Perfect Getaway Awaits',
            subheadline: 'Luxury accommodations with world-class amenities',
            ctaText: 'View Rooms',
          },
        },
      ],
    },
    {
      id: 'rooms',
      blocks: [
        {
          id: 'room-card-1',
          type: 'RoomCard',
          props: {
            id: 'rm-1',
            name: 'Deluxe Ocean View',
            description: 'Spacious room with panoramic ocean views and private balcony',
            price: 299,
            images: ['/images/room-1.jpg', '/images/room-2.jpg'],
            capacity: 2,
            bedType: 'King Bed',
            size: '450 sq ft',
            amenities: ['Ocean View', 'Private Balcony', 'Mini Bar', 'Smart TV', 'WiFi', 'Room Service'],
            available: true,
          },
        },
      ],
    },
    {
      id: 'amenities',
      blocks: [
        {
          id: 'amenities-1',
          type: 'AmenitiesList',
          props: {
            amenities: [
              { id: 'a1', name: 'Infinity Pool', icon: '🏊' },
              { id: 'a2', name: 'Spa & Wellness', icon: '💆' },
              { id: 'a3', name: 'Fine Dining', icon: '🍽️' },
              { id: 'a4', name: 'Fitness Center', icon: '💪' },
              { id: 'a5', name: 'Beach Access', icon: '🏖️' },
              { id: 'a6', name: 'Concierge', icon: '🛎️' },
            ],
            columns: 3,
          },
        },
      ],
    },
    {
      id: 'gallery',
      blocks: [
        {
          id: 'gallery-1',
          type: 'Gallery',
          props: {
            images: [
              { id: 'g1', url: '/images/property-1.jpg', alt: 'Property exterior' },
              { id: 'g2', url: '/images/property-2.jpg', alt: 'Pool area' },
              { id: 'g3', url: '/images/property-3.jpg', alt: 'Restaurant' },
            ],
            columns: 3,
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
                name: 'Michael Chen',
                text: 'Absolutely stunning property. The ocean view room exceeded our expectations.',
                rating: 5,
              },
            ],
          },
        },
      ],
    },
  ],
  metadata: {
    tags: ['landing', 'hotel', 'resort', 'accommodations'],
  },
};
