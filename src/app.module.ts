import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DIdModule } from './d-id/d-id.module';
import { TelegramModule } from './telegram/telegram.module';
import { TelegramService } from './telegram/telegram.service';
import { ConfigModule } from '@nestjs/config'; // Para variables de entornos

@Module({
  imports: [ConfigModule.forRoot(), DIdModule, TelegramModule],
  controllers: [AppController],
  providers: [AppService, TelegramService],
})
export class AppModule {}
