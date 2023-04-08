import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import TTSModule from './textToSpeech/tts.module';

@Module({
  imports: [TTSModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
