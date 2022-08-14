import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 白名单，去除DTO以外的无效属性
      forbidNonWhitelisted: true, // 让DTO以外的无效属性抛出异常
    }),
  );
  await app.listen(3000);
}
bootstrap();
