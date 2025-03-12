# Fireworks - Backend (NestJS)

## 📌 프로젝트 개요

Fireworks 백엔드는 NestJS 기반으로 구축되었으며, 프론트엔드에 데이터를 제공하는 API 서버입니다.

## 🚀 기술 스택

- **프레임워크:** NestJS (Express 기반)
- **언어:** TypeScript
- **데이터베이스:** PostgreSQL (Railway)
- **ORM:** Prisma
- **API 방식:** REST (GraphQL도 고려 가능)
- **인증:** JWT (or NextAuth 연동)
- **배포:** Railway

## 🛠️ 개발 가이드

### ✅ 설치 및 실행

cd backend
yarn install
yarn dev

### ✅ 환경 변수 설정 (`.env`)

DATABASE_URL="postgresql://username:password@your-database-url:5432/railway"
PORT=4000
JWT_SECRET="your-secret-key"

## **🗄️ 데이터베이스 (PostgreSQL + Prisma)**

- **클라우드 DB:** Railway PostgreSQL
- **ORM:** Prisma
- **마이그레이션:** `yarn prisma migrate dev --name init`
- **Prisma 클라이언트 생성:** `yarn prisma generate`

## **🔜 앞으로 추가할 기능**

- [ ] **User API (CRUD)**
- [ ] **인증 API (JWT)**
- [ ] **블로그 기능 API**
