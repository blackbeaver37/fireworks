import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

/**
 * PrismaModule: PrismaService를 전역적으로 사용할 수 있도록 설정하는 모듈
 * - `@Global()`을 사용하여 어디서든 `PrismaService`를 주입받을 수 있도록 함
 */
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // 다른 모듈에서도 사용 가능하게 설정
})
export class PrismaModule {}
