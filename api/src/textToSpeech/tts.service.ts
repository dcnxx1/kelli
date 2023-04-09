import { Injectable } from '@nestjs/common';
import { Polly } from 'aws-sdk';

@Injectable()
export class TTSService {
 get(): string {
  return 'CHANGED AGAIN AGAIN';
 }
}
