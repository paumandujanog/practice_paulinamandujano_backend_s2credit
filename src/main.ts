import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from 'swagger';
import { AppDataSource } from 'database/typeorm.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //AppDataSource.initialize();
  setupSwagger(app);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
