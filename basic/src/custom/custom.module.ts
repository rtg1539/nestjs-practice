import { Module } from '@nestjs/common';
import { CatsService } from '../cats/cats.service';
import { CatsModule } from '../cats/cats.module';
import { ConfigService } from '../config/config.service';

const mockCatsService = {
  mock: 'mock',
};

const configServiceProvider = {
  provide: ConfigService,
  useClass: ConfigService,
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
  ],
})
export class CustomModule {}
