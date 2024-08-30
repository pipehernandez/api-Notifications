import { Module } from '@nestjs/common';
import { TelegramMessageService } from './telegram-message.service';
import { TelegramMessageController } from './telegram-message.controller';

@Module({
  controllers: [TelegramMessageController],
  providers: [TelegramMessageService],
  exports:[TelegramMessageService]
})
export class TelegramMessageModule {}
