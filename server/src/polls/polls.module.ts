import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PollsController } from './polls.controller';

@Module({
  imports: [ConfigModule], //configModule allows to access env variables inside polls folder
  controllers: [PollsController],
  providers: [],
})
export class PollsModule {}
