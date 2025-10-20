import { PrismaClient } from './generated/prisma';
const prisma = new PrismaClient();
async function main() {
  // TODO: add seed data here
  // await prisma.tenant.create({ data: { id: 't1', slug: 'demo', name: 'Demo Tenant' } });
}
main().finally(() => prisma.$disconnect());
