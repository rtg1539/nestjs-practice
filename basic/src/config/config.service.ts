import { Inject, Injectable } from '@nestjs/common';
import { EnvConfig } from './interfaces/envConfig';

@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor(@Inject('CONFIG_OPTIONS') private options) {
    const filePath = '';
    const envFile = '';
    this.envConfig = { nono: 'nono' };
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}

export class DevelopmentConfigService {}

export class ProductionConfigService {}
