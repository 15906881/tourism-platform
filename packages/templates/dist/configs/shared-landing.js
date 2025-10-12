export const sharedLanding = {
    id: 'shared-landing',
    name: 'Generic Landing Page',
    description: 'Versatile landing page suitable for any vertical',
    vertical: 'shared',
    sections: [
        {
            id: 'hero',
            blocks: [
                {
                    id: 'hero-1',
                    type: 'Hero',
                    props: {
                        image: '/images/hero-generic.jpg',
                        headline: 'Welcome to Our Business',
                        subheadline: 'Discover what makes us unique',
                        ctaText: 'Get Started',
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
                            { id: 'g1', url: '/images/gallery-1.jpg', alt: 'Image 1' },
                            { id: 'g2', url: '/images/gallery-2.jpg', alt: 'Image 2' },
                            { id: 'g3', url: '/images/gallery-3.jpg', alt: 'Image 3' },
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
                                name: 'Customer Name',
                                text: 'Great service and excellent experience!',
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
                    id: 'contact-1',
                    type: 'ContactForm',
                    props: {
                        submitEndpoint: '/api/contact',
                    },
                },
            ],
        },
    ],
    metadata: {
        tags: ['landing', 'generic', 'versatile'],
    },
};
//# sourceMappingURL=shared-landing.js.map