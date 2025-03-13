import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /// **관리자 로그인 API (`POST /auth/login`)**
  /// - 이메일과 비밀번호를 받아 검증 후 JWT 토큰을 발급
  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const token = await this.authService.validateUser(email, password);
    if (!token) {
      throw new UnauthorizedException(
        '이메일 또는 비밀번호가 올바르지 않습니다.',
      );
    }
    return { access_token: token };
  }
}
