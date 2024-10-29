import { Injectable } from '@nestjs/common';
import { CreatePollFields, JoinPollFields, RejoinPollFields } from './types';
import { createPollId, createUserId } from 'src/ids';
import { PollsRepository } from './polls.repository';

@Injectable()
export class PollsService {
  constructor(private readonly pollsRepository: PollsRepository) {}
  async createPoll(fields: CreatePollFields) {
    const pollID = createPollId();
    const userID = createUserId();

    return { ...fields, pollID, userID };
  }

  async joinPoll(fields: JoinPollFields) {
    const userID = createUserId();

    return { ...fields, userID };
  }

  async rejoinPoll(fields: RejoinPollFields) {
    return fields;
  }
}
