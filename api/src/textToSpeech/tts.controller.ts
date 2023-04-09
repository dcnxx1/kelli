import { Body, Controller, Get, Param, Query } from '@nestjs/common';
import { TTSService } from './tts.service';
import { TTS } from './tts.models/tts.models.TTS';

@Controller('tts')
export class TTSController {
 constructor(private readonly ttsService: TTSService) {}

 @Get('generate')
 getVC(@Query() query: TTS) {
  // return this.ttsService.startSpeech(text, voiceId)
  return query;
 }
}
