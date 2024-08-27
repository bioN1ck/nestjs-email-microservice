import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import SubscriberEntity from './subscriber.entity';
import { SubscribersService } from './subscribers.service';

@Module({
  imports: [TypeOrmModule.forFeature([SubscriberEntity])],
  controllers: [SubscribersService],
})
export class SubscribersModule {}
