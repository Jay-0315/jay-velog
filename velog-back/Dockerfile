# Stage 1: 애플리케이션 빌드
FROM openjdk:17-jdk-slim as builder
WORKDIR /app
COPY . .
RUN ./gradlew bootJar

# Stage 2: 최종 이미지 생성
FROM openjdk:17-jre-slim
WORKDIR /app
COPY --from=builder /app/build/libs/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]