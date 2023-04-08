import { Controller, Get } from '@nestjs/common';
import { TTSService } from './tts.service';

@Controller('tts')
export class TTSController {
  constructor(private readonly ttsService: TTSService) {}

  @Get()
  getInitialRoute(): string {
    return this.ttsService.getDefaultTTS();
  }

  @Get('gg')
  getSomething(): string {
    return this.ttsService.getSomeTTS();
  }
}
