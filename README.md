# Fireworks - Portfolio Web Project

## 📌 프로젝트 개요

Fireworks는 개발자의 포트폴리오 웹사이트로, 프론트엔드와 백엔드를 직접 구축하여 개발 역량을 보여주는 프로젝트입니다.

## 🏗️ 프로젝트 구조 (Monorepo)

```
fireworks/
 ├── frontend/   # Next.js (React, TypeScript, Emotion)
 ├── backend/    # NestJS (PostgreSQL + Prisma)
 ├── .github/    # CI/CD (GitHub Actions)
 ├── README.md
 ├── package.json
 ├── .gitignore
```

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
- **데이터베이스:** PostgreSQL
- **ORM:** Prisma
- **API 방식:** REST (GraphQL도 고려 가능)
- **인증:** JWT (or NextAuth 연동)
- **배포:** Render (무료 배포)

## ⚡ API 설계

- 기본적으로 **REST API** 사용
- 필요하면 **GraphQL 추가 가능**
- NestJS에서 **데이터베이스 연동 & 인증 처리**

## 🔍 검색 기능

- 기본적인 문자열 검색 구현
- 필요하면 **PostgreSQL Full-Text Search 적용**하여 검색 성능 최적화

## 🛠️ CI/CD 및 자동화

### ✅ Git 관리

- `main` → 배포 브랜치
- `dev` → 개발 브랜치
- `feature/*` → 기능 개발 브랜치

### ✅ CI/CD (GitHub Actions)

- 프론트엔드 → Vercel 자동 배포
- 백엔드 → Render로 자동 배포

---

🔥 **현재 진행 상황**
✅ 프로젝트 구조 확정
✅ 기술 스택 결정
✅ API 방식 & 배포 방식 확정
🔜 NestJS 초기 설정 및 DB 모델링 진행
