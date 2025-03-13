import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';

/// **AuthModule (인증 모듈)**
/// - `AuthService`를 제공하여 비밀번호 해싱 및 검증 기능을 수행함
@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET, // JWT 시크릿 키 (환경 변수 사용)
      signOptions: { expiresIn: '1h' }, // 토큰 유효 기간 (1시간)
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService],
  exports: [AuthService], // 다른 모듈에서 사용할 수 있도록 export
})
export class AuthModule {}
