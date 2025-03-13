import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  UsePipes,
  ValidationPipe,
  BadRequestException,
  ParseUUIDPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto'; // 📌 DTO 임포트
import { UpdateUserDto } from './dto/update-user.dto'; // 📌 DTO 임포트

@Controller('users') // 📌 모든 엔드포인트의 기본 경로를 `/users`로 설정
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /**
   * 모든 유저 조회 (GET /users)
   * @returns 유저 목록
   */
  @Get()
  async getUsers() {
    console.log('🛠 [Controller] GET /users 요청 받음');
    return this.usersService.findAll();
  }

  /**
   * 특정 유저 조회 (GET /users/:id)
   * @param id - 조회할 유저 ID
   * @returns 해당 유저 데이터
   */
  @Get(':id')
  // UUID 검증 추가
  async getUser(@Param('id', ParseUUIDPipe) id: string) {
    console.log(`🛠 [Controller] GET /users/${id} 요청 받음`);
    return this.usersService.findOne(id);
  }

  /**
   * 새로운 유저 생성 (POST /users)
   * @param body - { email, name }
   * @returns 생성된 유저 데이터
   */
  @Post()
  @UsePipes(new ValidationPipe()) // 📌 DTO 유효성 검사 활성화
  async createUser(@Body() body: CreateUserDto) {
    console.log(
      `🛠 [Controller] POST /users 요청 받음 (데이터: ${JSON.stringify(body)})`,
    );
    return this.usersService.createUser(body.email, body.name);
  }

  /**
   * 유저 정보 업데이트 (PATCH /users/:id)
   * @param id - 수정할 유저 ID
   * @param body - 업데이트할 데이터 { email?, name? }
   * @returns 업데이트된 유저 데이터
   */
  @Patch(':id')
  @UsePipes(new ValidationPipe()) // 📌 DTO 유효성 검사 활성화
  async updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    if (!Object.keys(body).length) {
      // 입력된 body가 비어있을 때
      throw new BadRequestException('수정할 데이터를 입력해야 합니다.');
    }
    console.log(
      `🛠 [Controller] PATCH /users/${id} 요청 받음 (변경 데이터: ${JSON.stringify(body)})`,
    );
    return this.usersService.updateUser(id, body);
  }

  /**
   * 유저 삭제 (DELETE /users/:id)
   * @param id - 삭제할 유저 ID
   * @returns 삭제된 유저 데이터
   */
  @Delete(':id')
  // UUID 검증 추가
  async deleteUser(@Param('id', ParseUUIDPipe) id: string) {
    console.log(`🛠 [Controller] DELETE /users/${id} 요청 받음`);
    return this.usersService.deleteUser(id);
  }
}
