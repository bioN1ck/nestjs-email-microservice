import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

import { SubscribersService } from './subscribers.service';
import CreateSubscriberDto from './dto/create-subscriber.dto';

@Controller('subscribers')
export class SubscribersController {
  constructor(
    private readonly subscribersService: SubscribersService,
  ) {}

  // Message-based communication
  @MessagePattern({ cmd: 'add-message-based-subscriber' })
  addSubscriber(subscriberDto: CreateSubscriberDto) {
    return this.subscribersService.addSubscriber(subscriberDto);
  }

  @MessagePattern({ cmd: 'get-message-based-subscribers' })
  getAllSubscribers() {
    return this.subscribersService.getAllSubscribers();
  }

  // Event-based communication
  @EventPattern({ cmd: 'add-event-based-subscriber' })
  addEventSubscriber(subscriberDto: CreateSubscriberDto) {
    return this.subscribersService.addSubscriber(subscriberDto);
  }

  @EventPattern({ cmd: 'get-event-based-subscribers' })
  getEventBasedSubscribers() {
    return this.subscribersService.getAllSubscribers();
  }
}