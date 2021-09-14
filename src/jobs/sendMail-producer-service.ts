import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { ICreateUserDTO } from 'src/create-user/create-user-dto';

@Injectable()
export class sendMailProducerService {
  constructor(@InjectQueue('sendMail-queue') private queue: Queue) {}

  async sendMail({ name, email }: ICreateUserDTO) {
    await this.queue.add(
      'sendMail-job',
      {
        name,
        email,
      },
      {
        attempts: 4,
      },
    );
  }
}
