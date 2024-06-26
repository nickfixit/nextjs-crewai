import { PrismaClient } from '@prisma/client/edge';
// Alternative import methods:
// const { PrismaClient } = require('@prisma/client/edge'); // CommonJS syntax
// const prisma = new (await import('@prisma/client/edge')).PrismaClient(); // Dynamic import

// Deploying your app to serverless or edge functions? 
// Use the edge-optimized Prisma Client as shown above.

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
