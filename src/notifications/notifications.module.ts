import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Register } from './entities/notification.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Register])],
  controllers: [NotificationsController],
  providers: [NotificationsService],
  exports:[TypeOrmModule]

})
export class NotificationsModule {}
