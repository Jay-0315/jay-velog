# Stage 1: Build the application
FROM node:18-alpine AS builder
WORKDIR /app

# 패키지 설치
COPY package*.json ./
RUN npm install

# 소스 복사 및 빌드
COPY . .
RUN npm run build

# Stage 2: Run the application
FROM node:18-alpine
WORKDIR /app

# production용 패키지 설치만 다시 실행 (선택)
COPY package*.json ./
RUN npm install --omit=dev

# 필요한 파일 복사
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./

# 환경설정 파일이 있다면 복사
COPY --from=builder /app/.env ./

EXPOSE 3000
ENV NODE_ENV=production

CMD ["npx", "next", "start"]
