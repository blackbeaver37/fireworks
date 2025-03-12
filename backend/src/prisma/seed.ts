import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 샘플 유저 추가
  const user = await prisma.user.upsert({
    where: { email: 'test@example.com' },
    update: {},
    create: {
      email: 'test@example.com',
      name: '테스트 유저',
    },
  });

  console.log('✅ 샘플 유저 추가 완료:', user);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
