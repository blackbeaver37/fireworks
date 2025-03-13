// 📌 src/users/dto/create-user.dto.ts

import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

/**
 * 유저 생성 요청 시 데이터 검증을 위한 DTO
 */
export class CreateUserDto {
  @IsEmail() // 📌 이메일 형식 검증
  email: string;

  @IsString() // 📌 문자열인지 확인
  @IsNotEmpty() // 📌 값이 비어있지 않은지 확인
  name: string;
}
