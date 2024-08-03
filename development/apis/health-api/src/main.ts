import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  
  const port = configService.get<number>('PORT', 3000);
  const host = '0.0.0.0';
  
  await app.listen(port, host);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();

