import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';

/// **AuthModule (인증 모듈)**
/// - `AuthService`를 제공하여 비밀번호 해싱 및 검증 기능을 수행함
@Module({
  providers: [AuthService],
  exports: [AuthService], // 다른 모듈에서도 사용할 수 있도록 내보냄
})
export class AuthModule {}
