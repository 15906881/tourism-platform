import { PrismaClient } from '../generated/prisma'
import { hashPassword } from '@weblynk/auth'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')
  
  const tenant = await prisma.tenant.create({
    data: { name: 'Demo Tourism Company', slug: 'demo-tourism' }
  })
  
  const password = await hashPassword('admin123456')
  await prisma.user.create({
    data: {
      email: 'admin@demo.com',
      passwordHash: password,
      name: 'Admin User',
      memberships: { create: { tenantId: tenant.id, role: 'ADMIN' } }
    }
  })
  
  console.log('✅ Done! Login: admin@demo.com / admin123456')
}

main().finally(() => prisma.$disconnect())
