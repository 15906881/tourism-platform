import type { TemplateConfig } from '../types';

export const professionalLanding: TemplateConfig = {
  id: 'professional-landing',
  name: 'Professional Services Landing Page',
  description: 'Showcase expertise and build trust for consultants, agencies, and firms',
  vertical: 'professional',
  sections: [
    {
      id: 'hero',
      blocks: [
        {
          id: 'hero-1',
          type: 'Hero',
          props: {
            image: '/images/hero-professional.jpg',
            headline: 'Strategic Consulting for Growth',
            subheadline: 'Transform your business with expert guidance',
            ctaText: 'Schedule Consultation',
          },
        },
      ],
    },
    {
      id: 'team',
      blocks: [
        {
          id: 'team-1',
          type: 'TeamMember',
          props: {
            id: 't1',
            name: 'Alexandra Rivera',
            role: 'Senior Partner',
            bio: '15+ years experience in strategic planning and organizational transformation',
            photo: '/images/team-1.jpg',
            email: 'arivera@example.com',
            socialLinks: {
              linkedin: 'https://linkedin.com/in/arivera',
            },
          },
        },
      ],
    },
    {
      id: 'portfolio',
      blocks: [
        {
          id: 'portfolio-1',
          type: 'Portfolio',
          props: {
            items: [
              {
                id: 'p1',
                title: 'Enterprise Digital Transformation',
                description: 'Led complete digital overhaul for Fortune 500 client',
                image: '/images/project-1.jpg',
                category: 'Strategy',
                tags: ['enterprise', 'transformation', 'digital'],
              },
            ],
            columns: 3,
            showFilters: true,
          },
        },
      ],
    },
    {
      id: 'case-study',
      blocks: [
        {
          id: 'case-study-1',
          type: 'CaseStudy',
          props: {
            title: 'Market Expansion Strategy',
            client: 'Tech Startup Inc.',
            category: 'Growth Strategy',
            challenge: 'Client needed to enter new markets while maintaining profitability',
            solution: 'Developed comprehensive market analysis and phased expansion plan',
            results: [
              '35% revenue increase in first year',
              'Successfully entered 3 new markets',
              'Maintained 20% profit margins',
            ],
          },
        },
      ],
    },
    {
      id: 'faq',
      blocks: [
        {
          id: 'faq-1',
          type: 'FAQ',
          props: {
            faqs: [
              {
                id: 'f1',
                question: 'What industries do you serve?',
                answer: 'We work with clients across technology, finance, healthcare, and manufacturing sectors.',
              },
              {
                id: 'f2',
                question: 'How long is a typical engagement?',
                answer: 'Projects range from 3-month sprints to multi-year partnerships, depending on scope.',
              },
            ],
          },
        },
      ],
    },
  ],
  metadata: {
    tags: ['landing', 'consulting', 'professional', 'b2b'],
  },
};
