import { Injectable } from '@nestjs/common';
import { TranslationService } from 'src/shared/translation.service';


@Injectable()
export class AppService {
  constructor(private readonly translationService: TranslationService) {}

  async getHello(): Promise<string> {
    const translation = await this.translationService.translate(
      'Hello World!',
      {
        lang: 'pl',
      },
    );
    return translation;
  }
}