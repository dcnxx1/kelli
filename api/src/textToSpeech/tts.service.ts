import { Injectable } from '@nestjs/common';
import { Polly } from 'aws-sdk';

@Injectable()
export class TTSService {
  getDefaultTTS(): string {
    return 'CHANGED AGAIN AGAIN';
  }

  getSomeTTS(): string {
    return 'SOMETHING AGAIN';
  }
}
