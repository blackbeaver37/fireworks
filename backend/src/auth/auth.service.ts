import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
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
}
