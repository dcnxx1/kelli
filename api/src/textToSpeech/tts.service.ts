import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import AWS, { Polly, S3 } from 'aws-sdk';

@Injectable()
export class TTSService {
 private polly: AWS.Polly = new Polly({
  apiVersion: '2016-06-10',
  region: 'eu-central-1'
 });

 private presigned: AWS.Polly.Presigner = new Polly.Presigner({
  service: this.polly
 });

 private s3: AWS.S3 = new S3({
  region: 'eu-central-1',
  apiVersion: '2006-03-01'
 });

 private params = {
  LanguageCode: 'en-US'
 };
 protected describeVoicesOutput: AWS.Polly.Voice[] = [];
 protected voiceAudio: Polly.SynthesizeSpeechOutput = {};
 public audioUri: string = '';

 private getRequestParams(textToSpeech: string, voiceId: string) {
  return {
   OutputFormat: 'mp3',
   Text: textToSpeech,
   VoiceId: voiceId,
   Engine: 'neural',
   TextType: 'text'
  };
 }

 startSpeech(text: string, voiceId: string): string {
  if (!text || !voiceId) {
   throw new Error('Text or voiceId are undefined');
  }

  try {
   const requestParams = this.getRequestParams(text, voiceId);
   this.presigned.getSynthesizeSpeechUrl(requestParams, (err, url) => {
    if (err) throw new Error('Cannot get presigned speech url ' + err.message);
    this.audioUri = url;
   });

   return this.audioUri;
  } catch (err) {
   throw new Error(
    'Something went wrong inside startSpeech function ' + err.message
   );
  }
 }
}
