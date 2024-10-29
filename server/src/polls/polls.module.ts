import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PollsController } from './polls.controller';
import { PollsService } from './polls.service';
import { redisModule } from 'src/modules.config';
import { PollsRepository } from './polls.repository';

@Module({
  imports: [ConfigModule, redisModule], //configModule allows to access env variables inside polls folder
  controllers: [PollsController],
  providers: [PollsService, PollsRepository],
})
export class PollsModule {}
