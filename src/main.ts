import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const telegramService = app.get(this.TelegramService);
  telegramService.startBot();

  await app.listen(3000);
}
bootstrap();