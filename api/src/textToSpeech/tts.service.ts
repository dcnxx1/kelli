import { Injectable, NotFoundException } from '@nestjs/common';
import AWS, { Polly } from 'aws-sdk';
import { Readable, Stream } from 'stream';
import { join } from 'path';
import fs from 'fs';

@Injectable()
export class TTSService {
 private polly: AWS.Polly = new Polly({
  apiVersion: '2016-06-10',
  region: 'eu-central-1'
 });

 private params = {
  LanguageCode: 'en-US'
 };
 protected describeVoicesOutput: AWS.Polly.Voice[] = [];
 protected voiceAudio: Polly.SynthesizeSpeechOutput = {};
 audioUri: string = '';

 get(): string {
  return 'CHANGED AGAIN AGAIN';
 }

 describeVoices(): AWS.Polly.Voice[] {
  try {
   this.polly.describeVoices(this.params, (err, data) => {
    if (err) {
     throw new NotFoundException('No voice found');
    }
    for (let voice of data.Voices) {
     this.describeVoicesOutput.push(voice);
    }
   });
   return this.describeVoicesOutput;
  } catch (err) {
   if (err) {
    console.log('err ->>', err);
   }
  }
 }

 private getRequestParams(textToSpeech: string, voiceId: string) {
  return {
   OutputFormat: 'mp3',
   Text: textToSpeech,
   VoiceId: voiceId,
   Engine: 'neural',
   TextType: 'text',
   OutputS3BucketName: 'kellibucket'
  };
 }

 startSpeech(text: string, voiceId: string): string {
  try {
   if (!text || !voiceId) {
    throw new Error('Text or voiceId are undefined');
   }

   this.polly.startSpeechSynthesisTask(
    this.getRequestParams(text, voiceId),
    (err, data) => {
     if (err) throw new Error('Failed to request data from polly');
     this.audioUri = data.SynthesisTask.OutputUri;
    }
   );
   return this.audioUri;
  } catch (err) {
   throw new Error(
    'Something went wrong inside startSpeech function ' + err.message
   );
  }
 }
}
