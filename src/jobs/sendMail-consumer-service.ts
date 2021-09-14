import { MailerService } from '@nestjs-modules/mailer';
import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { ICreateUserDTO } from 'src/create-user/create-user-dto';

@Processor('sendMail-queue')
export class sendMailConsumerService {
  constructor(private mailService: MailerService) {}

  @Process('sendMail-job')
  async sendMailJob(job: Job<ICreateUserDTO>) {
    const { name, email } = job.data;

    await this.mailService.sendMail({
      to: email,
      from: 'contact@contact.com',
      subject: 'Welcome!',
      text: `Welcome ${name}, you have successfully registered in our app!`,
    });
  }
}
