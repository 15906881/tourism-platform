import { PrismaClient } from './generated/prisma';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // ============================================
  // 1. ACCOUNTS (needed for memberships)
  // ============================================
  const account1 = await prisma.accounts.upsert({
    where: { email: 'owner@demo-lodge.test' },
    update: {},
    create: {
      email: 'owner@demo-lodge.test',
    },
  });

  const account2 = await prisma.accounts.upsert({
    where: { email: 'ops@coastal-safaris.test' },
    update: {},
    create: {
      email: 'ops@coastal-safaris.test',
    },
  });

  console.log('✅ Created accounts');

  // ============================================
  // 2. TENANTS
  // ============================================
  const tenant1 = await prisma.tenants.upsert({
    where: { name: 'Demo Lodge' },
    update: {},
    create: {
      name: 'Demo Lodge',
    },
  });

  const tenant2 = await prisma.tenants.upsert({
    where: { name: 'Coastal Safaris' },
    update: {},
    create: {
      name: 'Coastal Safaris',
    },
  });

  console.log('✅ Created tenants');

  // ============================================
  // 3. USERS (belong to tenants)
  // ============================================
  const user1 = await prisma.users.upsert({
    where: { email: 'owner@demo-lodge.test' },
    update: {},
    create: {
      email: 'owner@demo-lodge.test',
      tenant_id: tenant1.id,
      role: 'owner',
    },
  });

  const user2 = await prisma.users.upsert({
    where: { email: 'ops@coastal-safaris.test' },
    update: {},
    create: {
      email: 'ops@coastal-safaris.test',
      tenant_id: tenant2.id,
      role: 'admin',
    },
  });

  console.log('✅ Created users');

  // ============================================
  // 4. MEMBERSHIPS (link accounts to tenants)
  // ============================================
  await prisma.memberships.upsert({
    where: {
      account_id_tenant_id: {
        account_id: account1.id,
        tenant_id: tenant1.id,
      },
    },
    update: {},
    create: {
      account_id: account1.id,
      tenant_id: tenant1.id,
      role: 'owner',
    },
  });

  await prisma.memberships.upsert({
    where: {
      account_id_tenant_id: {
        account_id: account2.id,
        tenant_id: tenant2.id,
      },
    },
    update: {},
    create: {
      account_id: account2.id,
      tenant_id: tenant2.id,
      role: 'admin',
    },
  });

  console.log('✅ Created memberships');

  // ============================================
  // 5. TEMPLATES
  // ============================================
  const template1 = await prisma.templates.upsert({
    where: { key: 'classic' },
    update: {},
    create: {
      key: 'classic',
      name: 'Classic Brochure',
      category: 'standard',
      version: 1,
      content: {
        layout: 'single-column',
        theme: 'light',
      },
    },
  });

  const template2 = await prisma.templates.upsert({
    where: { key: 'gallery' },
    update: {},
    create: {
      key: 'gallery',
      name: 'Photo Gallery',
      category: 'media-rich',
      version: 1,
      content: {
        layout: 'masonry',
        theme: 'dark',
      },
    },
  });

  console.log('✅ Created templates');

  // ============================================
  // 6. TENANT TEMPLATES (activate templates)
  // ============================================
  await prisma.tenant_templates.upsert({
    where: {
      tenant_id_template_id: {
        tenant_id: tenant1.id,
        template_id: template1.id,
      },
    },
    update: {},
    create: {
      tenant_id: tenant1.id,
      template_id: template1.id,
      enabled: true,
      overrides: {},
    },
  });

  await prisma.tenant_templates.upsert({
    where: {
      tenant_id_template_id: {
        tenant_id: tenant2.id,
        template_id: template2.id,
      },
    },
    update: {},
    create: {
      tenant_id: tenant2.id,
      template_id: template2.id,
      enabled: true,
      overrides: {},
    },
  });

  console.log('✅ Linked tenant templates');

  // ============================================
  // 7. SITES
  // ============================================
  const site1 = await prisma.sites.upsert({
    where: {
      tenant_id_key: {
        tenant_id: tenant1.id,
        key: 'main',
      },
    },
    update: {},
    create: {
      tenant_id: tenant1.id,
      key: 'main',
      name: 'Demo Lodge Main Site',
      domain: 'demo-lodge.local',
    },
  });

  const site2 = await prisma.sites.upsert({
    where: {
      tenant_id_key: {
        tenant_id: tenant2.id,
        key: 'main',
      },
    },
    update: {},
    create: {
      tenant_id: tenant2.id,
      key: 'main',
      name: 'Coastal Safaris Main Site',
      domain: 'coastal-safaris.local',
    },
  });

  console.log('✅ Created sites');

  // ============================================
  // 8. PAGES
  // ============================================
  await prisma.pages.create({
    data: {
      site_id: site1.id,
      template_id: template1.id,
      slug: 'home',
      overrides: {
        hero: {
          heading: 'Sleep under a million stars',
          cta: 'Book Now',
        },
        sections: [
          { type: 'features', items: ['Mountain views', 'Local cuisine', 'Guided hikes'] },
        ],
      },
      published: true,
    },
  });

  await prisma.pages.create({
    data: {
      site_id: site2.id,
      template_id: template2.id,
      slug: 'home',
      overrides: {
        hero: {
          heading: 'Where the ocean meets adventure',
          cta: 'View Trips',
        },
      },
      published: true,
    },
  });

  console.log('✅ Created pages');

  // ============================================
  // 9. LISTINGS
  // ============================================
  const listing1 = await prisma.listings.create({
    data: {
      tenant_id: tenant1.id,
      title: 'Mountain Cabin – 2 Nights',
      slug: 'mountain-cabin-2-nights',
      description: 'Cozy cabin with panoramic views. Sleeps 4.',
      type: 'property',
      category: 'cabin',
      price: 299.0,
      currency: 'USD',
      duration_minutes: 2880, // 2 days
      capacity: 4,
      is_bookable: true,
      status: 'published',
      metadata: {
        amenities: ['WiFi', 'Kitchen', 'Fireplace'],
      },
    },
  });

  const _listing2 = await prisma.listings.create({
    data: {
      tenant_id: tenant1.id,
      title: 'Guided Hike – Full Day',
      slug: 'guided-hike-full-day',
      description: 'Explore the ridge with an experienced guide.',
      type: 'service',
      category: 'hiking',
      price: 120.0,
      currency: 'USD',
      duration_minutes: 480,
      capacity: 8,
      is_bookable: true,
      status: 'published',
      metadata: {
        difficulty: 'moderate',
        includes: ['Guide', 'Lunch', 'Equipment'],
      },
    },
  });

  const listing3 = await prisma.listings.create({
    data: {
      tenant_id: tenant2.id,
      title: 'Sunset Cruise',
      slug: 'sunset-cruise',
      description: '2-hour sunset cruise with refreshments.',
      type: 'service',
      category: 'boat-tour',
      price: 89.0,
      currency: 'USD',
      duration_minutes: 120,
      capacity: 12,
      is_bookable: true,
      status: 'published',
      metadata: {
        includes: ['Drinks', 'Snacks', 'Life jackets'],
      },
    },
  });

  console.log('✅ Created listings');

  // ============================================
  // 10. MEDIA
  // ============================================
  const media1 = await prisma.media.create({
    data: {
      tenant_id: tenant1.id,
      filename: 'cabin-exterior.jpg',
      original_filename: 'cabin-exterior.jpg',
      mime_type: 'image/jpeg',
      size_bytes: 245600,
      s3_key: 'tenants/demo-lodge/cabin-exterior.jpg',
      s3_bucket: 'tourism-media',
      cloudfront_url: 'https://picsum.photos/id/1018/1000/600/',
      width: 1000,
      height: 600,
      alt_text: 'Mountain cabin exterior view',
      metadata: {},
    },
  });

  const media2 = await prisma.media.create({
    data: {
      tenant_id: tenant1.id,
      filename: 'cabin-interior.jpg',
      original_filename: 'cabin-interior.jpg',
      mime_type: 'image/jpeg',
      size_bytes: 198400,
      s3_key: 'tenants/demo-lodge/cabin-interior.jpg',
      s3_bucket: 'tourism-media',
      cloudfront_url: 'https://picsum.photos/id/1015/1000/600/',
      width: 1000,
      height: 600,
      alt_text: 'Cozy cabin interior',
      metadata: {},
    },
  });

  const media3 = await prisma.media.create({
    data: {
      tenant_id: tenant2.id,
      filename: 'sunset-boat.jpg',
      original_filename: 'sunset-boat.jpg',
      mime_type: 'image/jpeg',
      size_bytes: 312800,
      s3_key: 'tenants/coastal-safaris/sunset-boat.jpg',
      s3_bucket: 'tourism-media',
      cloudfront_url: 'https://picsum.photos/id/1025/1000/600/',
      width: 1000,
      height: 600,
      alt_text: 'Boat at sunset',
      metadata: {},
    },
  });

  console.log('✅ Created media');

  // ============================================
  // 11. LISTING_MEDIA (link media to listings)
  // ============================================
  await prisma.listing_media.create({
    data: {
      listing_id: listing1.id,
      media_id: media1.id,
      position: 0,
    },
  });

  await prisma.listing_media.create({
    data: {
      listing_id: listing1.id,
      media_id: media2.id,
      position: 1,
    },
  });

  await prisma.listing_media.create({
    data: {
      listing_id: listing3.id,
      media_id: media3.id,
      position: 0,
    },
  });

  console.log('✅ Linked listing media');

  // ============================================
  // 12. LEADS
  // ============================================
  await prisma.leads.create({
    data: {
      tenant_id: tenant1.id,
      name: 'Jane Visitor',
      email: 'jane@example.com',
      phone: '+1-555-0101',
      message: 'Do you allow late check-in?',
      subject: 'Check-in question',
      source: 'website',
      listing_id: listing1.id,
      status: 'new',
      metadata: {},
    },
  });

  await prisma.leads.create({
    data: {
      tenant_id: tenant2.id,
      name: 'Marco Guest',
      email: 'marco@example.com',
      phone: '+1-555-0102',
      message: 'Any group discounts for 8 people?',
      subject: 'Group booking inquiry',
      source: 'website',
      listing_id: listing3.id,
      status: 'new',
      metadata: {},
    },
  });

  console.log('✅ Created leads');

  // ============================================
  // 13. SUBSCRIPTIONS
  // ============================================
  const in30Days = new Date();
  in30Days.setDate(in30Days.getDate() + 30);

  await prisma.subscriptions.create({
    data: {
      tenant_id: tenant1.id,
      plan_id: 'pro',
      status: 'active',
      current_period_start: new Date(),
      current_period_end: in30Days,
      metadata: {},
    },
  });

  await prisma.subscriptions.create({
    data: {
      tenant_id: tenant2.id,
      plan_id: 'basic',
      status: 'trialing',
      current_period_start: new Date(),
      current_period_end: in30Days,
      trial_end: in30Days,
      metadata: {},
    },
  });

  console.log('✅ Created subscriptions');

  // ============================================
  // 14. AUDIT LOGS
  // ============================================
  await prisma.audit_logs.create({
    data: {
      tenant_id: tenant1.id,
      user_id: user1.id,
      action: 'seed.init',
      entity_type: 'tenant',
      entity_id: tenant1.id,
      new_values: { seeded: true },
      metadata: {},
    },
  });

  await prisma.audit_logs.create({
    data: {
      tenant_id: tenant2.id,
      user_id: user2.id,
      action: 'seed.init',
      entity_type: 'tenant',
      entity_id: tenant2.id,
      new_values: { seeded: true },
      metadata: {},
    },
  });

  console.log('✅ Created audit logs');

  console.log('🎉 Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
