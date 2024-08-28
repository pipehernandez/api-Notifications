import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationTypeModule } from './notification-type/notification-type.module';
import { TemplatesModule } from './templates/templates.module';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [NotificationsModule, TemplatesModule, NotificationTypeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
