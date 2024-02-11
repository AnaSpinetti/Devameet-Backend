import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'log']
  });

  app.enableCors(/*{origin: devameet.com"}*/);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted:false
    })
  )

  app.setGlobalPrefix("api")
  await app.listen(3000);
}
bootstrap();
