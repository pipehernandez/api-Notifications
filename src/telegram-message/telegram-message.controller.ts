import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TelegramMessageService } from './telegram-message.service';
import { CreateTelegramMessageDto } from './dto/create-telegram-message.dto';

@Controller('telegram')
export class TelegramMessageController {
  constructor(private readonly telegramMessageService: TelegramMessageService) {}

  @Get("start")
  async create() {
    await this.telegramMessageService.connect();
  }

  @Post("send")
  async findAll(@Body()data:CreateTelegramMessageDto) {
    await this.telegramMessageService.sendMessage(data);
  }

}
