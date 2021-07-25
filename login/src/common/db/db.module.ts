import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  exports: [DbModule],
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      connectionName: 'nest',
      useFactory: () => ({
        uri: `mongodb://localhost:27017/nest`,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DbModule {}
