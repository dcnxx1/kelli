import { Controller, Get } from '@nestjs/common';
import { TTSService } from './tts.service';

@Controller('tts')
export class TTSController {
  constructor(private readonly ttsService: TTSService) {}

  @Get()
  get(): string {
    return this.ttsService.get();
  }
}
