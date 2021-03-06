import { Injectable, Module } from '@nestjs/common';
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

// class provider
const configServiceProvider = {
  provide: ConfigService,
  useClass:
    process.env.NODE_ENV === 'development'
      ? DevelopmentConfigService
      : ProductionConfigService,
};

// factory provider
const connectionFactory = {
  provide: 'CONNECTION',
  useFactory: (optionsProvider: OptionsProvider) => {
    const options = optionsProvider.get();
    return new DatabaseConnection(options);
  },
  inject: [OptionsProvider],
};

// alias provider
@Injectable()
class LoggerService {
  hoho() {
    return 'hoho';
  }
}

const loggerAliasProvider = {
  provide: 'AliasedLoggerService',
  useExisting: LoggerService,
};

// non-service based provider
const configFactory = {
  provide: 'CONFIG',
  useFactory: () => {
    return ['hoho'];
  },
};

async function createConnection(options: any) {
  return 'conn';
}

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
    LoggerService,
    loggerAliasProvider,
    configFactory,
    {
      provide: 'ASYNC_CONNECTION',
      useFactory: async () => {
        const connection = await createConnection('options');
        return connection;
      },
    },
  ],
  // EXPORT CUSTOM PROVIDER
  exports: ['CONNECTION'],
  // or 전체 객체 export
  // exports: [connectionFactory],
})
export class CustomModule {}
