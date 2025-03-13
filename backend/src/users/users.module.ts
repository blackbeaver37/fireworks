import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController], // 📌 API 요청을 처리하는 컨트롤러 등록
  providers: [UsersService], // 📌 비즈니스 로직을 처리하는 서비스 등록
})
export class UsersModule {}
