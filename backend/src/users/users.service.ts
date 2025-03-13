import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService, // 📌 PrismaService 주입
    private readonly authService: AuthService, // AuthService 주입
  ) {}

  /// **관리자 계정 생성 (비밀번호 해싱 적용)**
  async createAdmin(email: string, password: string) {
    const hashedPassword = await this.authService.hashPassword(password); // 비밀번호 해싱

    return this.prisma.admin.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
  }

  /**
   * 전체 유저 목록 조회
   * @returns 모든 유저 데이터 리스트
   */
  async findAll() {
    console.log('📌 [GET] 요청: 모든 유저 조회');
    return this.prisma.user.findMany();
  }

  /**
   * 특정 유저 조회
   * @param id - 조회할 유저의 ID
   * @returns 해당 ID의 유저 데이터
   */
  async findOne(id: string) {
    console.log(`📌 [GET] 요청: 유저 조회 (ID: ${id})`);
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  /**
   * 새로운 유저 생성
   * @param email - 유저 이메일
   * @param name - 유저 이름
   * @returns 생성된 유저 데이터
   */
  async createUser(email: string, name: string) {
    console.log(`📌 [POST] 요청: 유저 생성 (이메일: ${email}, 이름: ${name})`);
    return this.prisma.user.create({
      data: { email, name },
    });
  }

  /**
   * 유저 정보 업데이트
   * @param id - 수정할 유저의 ID
   * @param data - 업데이트할 데이터 (email, name 중 선택)
   * @returns 업데이트된 유저 데이터
   */
  async updateUser(id: string, data: { email?: string; name?: string }) {
    console.log(
      `📌 [PATCH] 요청: 유저 업데이트 (ID: ${id}, 변경 데이터: ${JSON.stringify(data)})`,
    );
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  /**
   * 유저 삭제
   * @param id - 삭제할 유저의 ID
   * @returns 삭제된 유저 데이터
   */
  async deleteUser(id: string) {
    console.log(`📌 [DELETE] 요청: 유저 삭제 (ID: ${id})`);
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
