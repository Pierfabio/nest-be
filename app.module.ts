import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user/schemas/user';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest-be')],
})
export class AppModule {}