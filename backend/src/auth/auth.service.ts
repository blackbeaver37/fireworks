import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  /// **비밀번호 해싱 함수**
  /// - 사용자가 입력한 비밀번호를 `bcrypt`로 해싱하여 DB에 저장할 때 사용됨
  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10; // 솔트 값 (해싱 강도)
    return await bcrypt.hash(password, saltRounds);
  }

  /// **비밀번호 검증 함수**
  /// - 로그인 시 사용자가 입력한 비밀번호가 DB의 해싱된 비밀번호와 일치하는지 확인
  async validatePassword(
    inputPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(inputPassword, hashedPassword);
  }

  /// **관리자 로그인 검증 및 JWT 토큰 발급**
  /// - 사용자가 입력한 이메일과 비밀번호를 검증한 후 JWT 토큰을 생성하여 반환
  /// - 이메일이 존재하지 않거나 비밀번호가 일치하지 않으면 `UnauthorizedException` 발생
  async validateUser(email: string, password: string): Promise<string> {
    const admin = await this.prisma.admin.findUnique({ where: { email } });

    // 1️⃣ 이메일이 존재하지 않는 경우 → 예외 발생
    if (!admin) {
      throw new UnauthorizedException(
        '이메일 또는 비밀번호가 올바르지 않습니다.',
      );
    }

    // 2️⃣ 입력한 비밀번호가 DB의 해싱된 비밀번호와 일치하는지 확인
    const isMatch = await this.validatePassword(password, admin.password);
    if (!isMatch) {
      throw new UnauthorizedException(
        '이메일 또는 비밀번호가 올바르지 않습니다.',
      );
    }

    // 3️⃣ 인증 성공 → JWT 토큰 생성 후 반환
    return this.jwtService.sign({ sub: admin.id, email: admin.email });
  }
}
