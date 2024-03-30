import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import SubscriberEntity from './subscriber.entity';
import CreateSubscriberDto from './dto/create-subscriber.dto';

@Injectable()
export class SubscribersService {
  constructor(
    @InjectRepository(SubscriberEntity)
    private readonly subscribersRepository: Repository<SubscriberEntity>,
  ) {}

  async addSubscriber(subscriberDto: CreateSubscriberDto) {
    const newSubscriber = this.subscribersRepository.create(subscriberDto);
    await this.subscribersRepository.save(newSubscriber);

    return newSubscriber;
  }

  async getAllSubscribers() {
    return this.subscribersRepository.find();
  }
}