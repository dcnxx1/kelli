import { Module } from '@nestjs/common';
import TTSModule from './textToSpeech/tts.module';
import { TTSController } from './textToSpeech/tts.controller';
import { TTSService } from './textToSpeech/tts.service';

@Module({
  imports: [TTSModule],
  controllers: [TTSController],
  providers: [TTSService],
})
export class AppModule {}
