-- Seed ~20 starter templates (idempotent via ON CONFLICT on key)
-- Categories: landing, about, contact, blog, gallery, pricing, faq, testimonials, team,
-- careers, events, booking, newsletter, legal, support, coming-soon, maintenance, sitemap, portfolio, product

INSERT INTO core.templates(key, name, category, version, content) VALUES
  ('landing-basic',      'Landing (Basic)',      'landing', 1, '{"sections":["hero","features","cta"]}'),
  ('landing-hero-split', 'Landing (Hero Split)', 'landing', 1, '{"sections":["hero-split","logos","cta"]}'),
  ('about-classic',      'About (Classic)',      'about',   1, '{"sections":["mission","history","team","cta"]}'),
  ('contact-simple',     'Contact (Simple)',     'contact', 1, '{"fields":["name","email","message"],"map":false}'),
  ('blog-list',          'Blog List',            'blog',    1, '{"layout":"list","teaserLength":140}'),
  ('blog-post',          'Blog Post',            'blog',    1, '{"sections":["title","byline","content","share"]}'),
  ('gallery-basic',      'Gallery (Basic)',      'gallery', 1, '{"layout":"grid","columns":3}'),
  ('pricing-3-tier',     'Pricing (3 Tier)',     'pricing', 1, '{"tiers":[{"name":"Starter"},{"name":"Growth"},{"name":"Scale"}]}'),
  ('faq-accordion',      'FAQ (Accordion)',      'faq',     1, '{"layout":"accordion"}'),
  ('testimonials-cards', 'Testimonials (Cards)', 'testimonials', 1, '{"layout":"cards","showRating":true}'),
  ('team-grid',          'Team (Grid)',          'team',    1, '{"columns":3,"fields":["name","role","avatar","links"]}'),
  ('careers-list',       'Careers (List)',       'careers', 1, '{"layout":"list","applyLink":true}'),
  ('events-calendar',    'Events (Calendar)',    'events',  1, '{"view":"month","timezone":"UTC"}'),
  ('booking-simple',     'Booking (Simple)',     'booking', 1, '{"steps":["date","details","confirm"]}'),
  ('newsletter-signup',  'Newsletter Signup',    'newsletter', 1, '{"providers":["mailchimp","sendgrid"],"doubleOptIn":true}'),
  ('legal-terms',        'Legal: Terms',         'legal',   1, '{"sections":["intro","license","liability","governing-law"]}'),
  ('legal-privacy',      'Legal: Privacy',       'legal',   1, '{"sections":["intro","data","cookies","rights","contact"]}'),
  ('support-center',     'Support Center',       'support', 1, '{"sections":["search","categories","contact"]}'),
  ('coming-soon',        'Coming Soon',          'coming-soon', 1, '{"sections":["headline","timer","signup"]}'),
  ('maintenance',        'Maintenance',          'maintenance', 1, '{"message":"We will be back shortly."}'),
  ('sitemap-basic',      'Sitemap (Basic)',      'sitemap', 1, '{"groups":["pages","posts","products"]}'),
  ('portfolio-grid',     'Portfolio (Grid)',     'portfolio', 1, '{"columns":3,"filters":true}'),
  ('product-detail',     'Product Detail',       'product', 1, '{"sections":["gallery","details","specs","reviews","cta"]}')
ON CONFLICT (key) DO UPDATE
SET name       = EXCLUDED.name,
    category   = EXCLUDED.category,
    version    = GREATEST(core.templates.version, EXCLUDED.version),
    content    = EXCLUDED.content,
    updated_at = now();
