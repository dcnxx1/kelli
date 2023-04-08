import { Module } from '@nestjs/common';
import { TTSService } from './tts.service';
import { TTSController } from './tts.controller';

@Module({
  providers: [TTSService],
  controllers: [TTSController],
})
export default class TTSModule {}
