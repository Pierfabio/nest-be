import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO } from './dto/create.user.dto';
import { User, UserDocument } from './schemas/user';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly model: Model<UserDocument>) {}

  async findOne(username: string): Promise<User> {
    return await this.model.findById(username).exec();
  }

  async create(createUserDto: CreateUserDTO): Promise<User> {
    return await new this.model({
      ...createUserDto,
    }).save();
  }

}