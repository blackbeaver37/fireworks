import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from '../prisma/prisma.service'; // 📌 PrismaService 추가
import { AuthModule } from '../auth/auth.module'; // 📌 AuthModule 추가 (UsersService에서 AuthService 사용 중)

@Module({
  imports: [AuthModule], // 📌 UsersService에서 AuthService를 사용하므로 AuthModule을 import
  controllers: [UsersController], // 📌 API 요청을 처리하는 컨트롤러 등록
  providers: [UsersService, PrismaService], // 📌 비즈니스 로직을 처리하는 서비스 등록 (PrismaService 추가)
  exports: [UsersService], // 📌 다른 모듈에서도 UsersService를 사용할 수 있도록 export
})
export class UsersModule {}
