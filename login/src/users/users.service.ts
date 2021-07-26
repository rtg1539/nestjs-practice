import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  create(createUserDto: CreateUserDto) {
    const createdCat = new this.userModel(createUserDto);
    return createdCat.save();
  }

  async findOne({ id, pw }: { id: string, pw: string }) {
    const b = await this.userModel.findOne({ id, pw });
    return b;
  }
}
