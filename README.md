# Fireworks - Portfolio Web Project

## 📌 프로젝트 개요

Fireworks는 개발자의 포트폴리오 웹사이트로, 프론트엔드와 백엔드를 직접 구축하여 개발 역량을 보여주는 프로젝트입니다.

## 🏗️ 프로젝트 구조 (Monorepo)

fireworks/
├── frontend/ # Next.js (React, TypeScript, Emotion)
│ ├── README.md # 프론트엔드 관련 설명
├── backend/ # NestJS (PostgreSQL + Prisma)
│ ├── README.md # 백엔드 관련 설명
├── .github/ # CI/CD (GitHub Actions)
├── README.md # 전체 프로젝트 설명 (이 파일)
├── package.json
├── .gitignore

- 🔹 **프론트엔드 관련 설명은 [`frontend/README.md`](./frontend/README.md)에서 확인**
- 🔹 **백엔드 관련 설명은 [`backend/README.md`](./backend/README.md)에서 확인**

## 🚀 기술 스택

### ✅ 프론트엔드 (Next.js)

- **프레임워크:** Next.js
- **언어:** TypeScript
- **스타일링:** Emotion
- **상태 관리:** React-Query, Recoil
- **마크다운 렌더링:** `react-markdown` (블로그 기능)
- **데이터 요청:** NestJS 백엔드 API 호출 (REST 기반)
- **인증:** NextAuth (또는 자체 JWT 인증)
- **배포:** Vercel

### ✅ 백엔드 (NestJS)

- **프레임워크:** NestJS (Express 기반)
- **언어:** TypeScript
- **데이터베이스:** PostgreSQL (Railway)
- **ORM:** Prisma
- **API 방식:** REST (GraphQL도 고려 가능)
- **인증:** JWT (or NextAuth 연동)
- **배포:** Railway (무료 배포)

## 🔍 데이터베이스 (PostgreSQL + Prisma)

- **클라우드 DB:** Railway PostgreSQL
- **ORM:** Prisma
- **마이그레이션:** `yarn prisma migrate dev --name init`
- **Prisma 클라이언트 생성:** `yarn prisma generate`

## 🛠️ Yarn Workspaces 설정

- **PnP 비활성화 (`.yarnrc.yml` 수정 → `nodeLinker: node-modules`)**
- **패키지 설치 방식:** `yarn install`
- **Prisma 사용 시:**
  yarn prisma migrate dev --name init
  yarn prisma generate

## 🛠️ CI/CD 및 자동화

### ✅ Git 관리

- `main` → 배포 브랜치
- `dev` → 개발 브랜치
- `feature/*` → 기능 개발 브랜치

### ✅ CI/CD (GitHub Actions)

- 프론트엔드 → Vercel 자동 배포
- 백엔드 → Railway로 자동 배포

## **📌 앞으로 진행할 작업**

- ✅ **기본 프로젝트 구조 설정 완료**
- ✅ **Prisma & PostgreSQL 설정 완료**
- 🔜 **NestJS API 개발 (CRUD 기능 추가)**
- 🔜 **프론트엔드 레이아웃 & API 연동**
