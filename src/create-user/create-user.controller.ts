import { Body, Controller, Post } from '@nestjs/common';
import { sendMailProducerService } from 'src/jobs/sendMail-producer-service';
import { ICreateUserDTO } from './create-user-dto';

@Controller('create-user')
export class CreateUserController {
  constructor(private sendMailService: sendMailProducerService) {}

  @Post('/')
  createUser(@Body() { name, email }: ICreateUserDTO) {
    this.sendMailService.sendMail({
      name,
      email,
    });

    return { name, email };
  }
}
