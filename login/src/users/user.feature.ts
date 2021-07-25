import { AsyncModelFactory, MongooseModule } from '@nestjs/mongoose';
import { UserFactory } from './entities/user.entity';

const factories: AsyncModelFactory[] = [UserFactory];
export const UserFeature = MongooseModule.forFeatureAsync(factories, 'nest');
