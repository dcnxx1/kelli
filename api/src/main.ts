import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
 const app = await NestFactory.create(AppModule, {
  cors: {
   origin: 'http://192.168.2.20:19000'
  }
 });
 await app.listen(3030);
}
bootstrap();
