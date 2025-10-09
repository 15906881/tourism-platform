const { PrismaClient } = require('./generated/prisma');

async function test() {
  try {
    const prisma = new PrismaClient();
    await prisma.$connect();
    console.log('✅ Connected successfully!');
    await prisma.$disconnect();
  } catch (error) {
    console.log('❌ Connection failed:', error.message);
  }
}

test();
