import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init(); // 📌 이 줄을 추가하면 Prisma 모듈이 먼저 초기화됨

  // 📌 이제 Prisma 연결 로그가 먼저 출력됨
  const prismaService = app.get(PrismaService);
  const user = await prismaService.user.findUnique({
    where: { email: 'test@example.com' },
  });

  console.log('✅ 조회된 유저:', user);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
