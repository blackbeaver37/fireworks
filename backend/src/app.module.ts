import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';

/**
 * AppModule: NestJS의 루트 모듈
 * - PrismaModule을 추가하여 어디서든 DB 연결을 사용할 수 있도록 함
 */
@Module({
  imports: [PrismaModule], // 📌 PrismaModule 추가!
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
