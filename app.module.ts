import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest-be')],
})
export class AppModule {}