import { Controller } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GrpcMethod } from '@nestjs/microservices';

import SubscriberEntity from './subscriber.entity';
import CreateSubscriberDto from './dto/create-subscriber.dto';

@Controller()
export class SubscribersService {
  constructor(
    @InjectRepository(SubscriberEntity)
    private readonly subscribersRepository: Repository<SubscriberEntity>,
  ) {}

  @GrpcMethod()
  async addSubscriber(subscriberDto: CreateSubscriberDto) {
    const newSubscriber = this.subscribersRepository.create(subscriberDto);
    await this.subscribersRepository.save(newSubscriber);

    return newSubscriber;
  }

  @GrpcMethod()
  async getAllSubscribers() {
    const data = await this.subscribersRepository.find();

    return { data };
  }
}
