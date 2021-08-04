import { Module } from '@nestjs/common';
import { CatsService } from '../cats/cats.service';
import { CatsModule } from '../cats/cats.module';
import {
  ConfigService,
  DevelopmentConfigService,
  ProductionConfigService,
} from '../config/config.service';

class OptionsProvider {
  get() {
    return 'asdf';
  }
}

class DatabaseConnection {
  constructor(options) {
    console.log(options);
  }
}

const mockCatsService = {
  mock: 'mock',
};

const configServiceProvider = {
  provide: ConfigService,
  useClass:
    process.env.NODE_ENV === 'development'
      ? DevelopmentConfigService
      : ProductionConfigService,
};

const connectionFactory = {
  provide: 'CONNECTION',
  useFactory: (optionsProvider: OptionsProvider) => {
    const options = optionsProvider.get();
    return new DatabaseConnection(options);
  },
  inject: [OptionsProvider],
};

@Module({
  imports: [CatsModule],
  providers: [
    {
      provide: CatsService,
      useValue: mockCatsService,
    },
    {
      provide: 'CONNECTION',
      useValue: mockCatsService,
    },
    configServiceProvider,
    connectionFactory,
  ],
})
export class CustomModule {}
