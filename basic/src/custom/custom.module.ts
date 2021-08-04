import { Module } from '@nestjs/common';
import { CatsService } from '../cats/cats.service';
import { CatsModule } from '../cats/cats.module';

const mockCatsService = {
  mock: 'mock',
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
  ],
})
export class CustomModule {}
