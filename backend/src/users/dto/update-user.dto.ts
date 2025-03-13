// 📌 src/users/dto/update-user.dto.ts

import { IsEmail, IsOptional, IsString } from 'class-validator';

/**
 * 유저 수정 요청 시 데이터 검증을 위한 DTO
 */
export class UpdateUserDto {
  @IsEmail() // 📌 이메일 형식 검증
  @IsOptional() // 📌 필수 입력이 아님 (선택적 입력)
  email?: string;

  @IsString() // 📌 문자열인지 확인
  @IsOptional() // 📌 필수 입력이 아님 (선택적 입력)
  name?: string;
}
