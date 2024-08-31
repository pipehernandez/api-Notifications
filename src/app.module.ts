import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationTypeModule } from './notification-type/notification-type.module';
import { TemplatesModule } from './templates/templates.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ConfigModule } from '@nestjs/config';
import dbConnection from './config/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TelegramMessageModule } from './telegram-message/telegram-message.module';
import { TelegramBotModule } from './telegram-bot/telegram-bot.module';
import { TelegrafModule } from 'nestjs-telegraf';

@Module({
  imports: [
      ConfigModule.forRoot({
        isGlobal:true,
        load:[dbConnection]
      }),
      TypeOrmModule.forRootAsync({
        useFactory:dbConnection
      }),
      TelegrafModule.forRoot({
        token:process.env.SECRET_BOT
      })
    ,NotificationsModule, TemplatesModule, NotificationTypeModule, TelegramMessageModule, TelegramBotModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
