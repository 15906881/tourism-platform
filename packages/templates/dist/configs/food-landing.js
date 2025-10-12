export const foodLanding = {
    id: 'food-landing',
    name: 'Restaurant Landing Page',
    description: 'Complete restaurant website with menu and reservations',
    vertical: 'food',
    sections: [
        {
            id: 'hero',
            blocks: [
                {
                    id: 'hero-1',
                    type: 'Hero',
                    props: {
                        image: '/images/hero-restaurant.jpg',
                        headline: 'Authentic Italian Cuisine',
                        subheadline: 'Farm-to-table dining in the heart of the city',
                        ctaText: 'Reserve a Table',
                    },
                },
            ],
        },
        {
            id: 'menu',
            blocks: [
                {
                    id: 'menu-section-1',
                    type: 'MenuSection',
                    props: {
                        title: 'Appetizers',
                        description: 'Start your meal with our signature starters',
                        items: [
                            {
                                id: 'm1',
                                name: 'Bruschetta',
                                description: 'Toasted bread with tomatoes, basil, and olive oil',
                                price: 12,
                                dietary: ['vegetarian'],
                            },
                            {
                                id: 'm2',
                                name: 'Calamari Fritti',
                                description: 'Lightly fried squid with marinara sauce',
                                price: 16,
                                spicyLevel: 1,
                            },
                        ],
                    },
                },
            ],
        },
        {
            id: 'hours',
            blocks: [
                {
                    id: 'hours-1',
                    type: 'Hours',
                    props: {
                        hours: [
                            { day: 'Monday', closed: true },
                            { day: 'Tuesday', open: '5:00 PM', close: '10:00 PM' },
                            { day: 'Wednesday', open: '5:00 PM', close: '10:00 PM' },
                            { day: 'Thursday', open: '5:00 PM', close: '10:00 PM' },
                            { day: 'Friday', open: '5:00 PM', close: '11:00 PM' },
                            { day: 'Saturday', open: '12:00 PM', close: '11:00 PM' },
                            { day: 'Sunday', open: '12:00 PM', close: '9:00 PM' },
                        ],
                    },
                },
            ],
        },
        {
            id: 'reservation',
            blocks: [
                {
                    id: 'reservation-1',
                    type: 'ReservationWidget',
                    props: {
                        availableTimes: ['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM'],
                    },
                },
            ],
        },
        {
            id: 'location',
            blocks: [
                {
                    id: 'map-1',
                    type: 'LocationMap',
                    props: {
                        address: '123 Main St, Calgary, AB',
                    },
                },
            ],
        },
    ],
    metadata: {
        tags: ['landing', 'restaurant', 'food', 'reservations'],
    },
};
//# sourceMappingURL=food-landing.js.map