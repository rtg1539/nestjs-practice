import {
  AsyncModelFactory,
  Prop,
  Schema,
  SchemaFactory,
} from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  id: string;

  @Prop()
  pw: string;
}

const UserSchema = SchemaFactory.createForClass(User);
export const UserFactory: AsyncModelFactory = {
  name: User.name,
  useFactory: () => {
    return UserSchema;
  },
};
