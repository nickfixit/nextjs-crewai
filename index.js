import { PrismaClient } from '@prisma/client/edge';
// Alternative import methods:
// const { PrismaClient } = require('@prisma/client/edge'); // CommonJS syntax
// const prisma = new (await import('@prisma/client/edge')).PrismaClient(); // Dynamic import

const prisma = new PrismaClient();

async function main() {
  // Example usage of Prisma Client
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
