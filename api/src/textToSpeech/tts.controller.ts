import { Controller, Get, Query } from '@nestjs/common';
import { TTSService } from './tts.service';
import { TTS } from './tts.models/tts.models.TTS';

@Controller('tts')
export class TTSController {
 constructor(private readonly ttsService: TTSService) {}

 @Get('generate')
 getVC(@Query() query: TTS): string {
  console.log('query =>>', query);
  const { voiceId, text } = query;
  const ll = this.ttsService.startSpeech(text, voiceId);
  console.log('ll =>>', ll);
  return this.ttsService.startSpeech(text, voiceId);
 }
}
