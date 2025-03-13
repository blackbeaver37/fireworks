import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';

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
  async getUser(@Param('id') id: string) {
    console.log(`🛠 [Controller] GET /users/${id} 요청 받음`);
    return this.usersService.findOne(id);
  }

  /**
   * 새로운 유저 생성 (POST /users)
   * @param body - { email, name }
   * @returns 생성된 유저 데이터
   */
  @Post()
  async createUser(@Body() body: { email: string; name: string }) {
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
  async updateUser(
    @Param('id') id: string,
    @Body() body: { email?: string; name?: string },
  ) {
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
  async deleteUser(@Param('id') id: string) {
    console.log(`🛠 [Controller] DELETE /users/${id} 요청 받음`);
    return this.usersService.deleteUser(id);
  }
}
