import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

/**
 * PrismaService: NestJS에서 Prisma를 관리하는 서비스
 * - `PrismaClient`를 확장하여 데이터베이스 연결을 관리함
 * - NestJS의 `OnModuleInit`, `OnModuleDestroy`를 구현하여
 *   앱이 실행될 때 연결하고, 종료될 때 자동으로 연결을 해제함
 */
@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  /**
   * onModuleInit: 모듈이 초기화될 때 실행됨
   * - Prisma와 데이터베이스 연결을 설정함
   */
  async onModuleInit() {
    await this.$connect(); // DB 연결
    console.log('✅ PrismaService: Database connected');
  }

  /**
   * onModuleDestroy: 모듈이 종료될 때 실행됨
   * - Prisma의 연결을 해제하여 리소스를 정리함
   */
  async onModuleDestroy() {
    await this.$disconnect(); // DB 연결 해제
    console.log('✅ PrismaService: Database disconnected');
  }
}
