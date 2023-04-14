import { Controller, Get, Query } from '@nestjs/common';
import { TTSService } from './tts.service';
import { TTS } from './tts.models/tts.models.TTS';

@Controller('tts')
export class TTSController {
 constructor(private readonly ttsService: TTSService) {}

 @Get('generate')
 getVC(@Query() query: TTS): string {
  const { voiceId, text } = query;

  return this.ttsService.startSpeech(text, voiceId);
 }

}
