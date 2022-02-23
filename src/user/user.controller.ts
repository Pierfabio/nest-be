import {
    Body,
    Controller,
    Post,
  } from '@nestjs/common';
import { Encryptor } from 'src/utility/encryptor';
import { CreateUserDTO } from './dto/create.user.dto';
import { UserService } from './user.service';
  
  @Controller('users')
  export class UserController {
    constructor(private readonly service: UserService, private readonly encryptor: Encryptor) {}
  
    @Post()
    async create(@Body() createUserDto: CreateUserDTO) {
      createUserDto.password = await this.encryptor.hash(createUserDto.password);
      return await this.service.create(createUserDto);
    }

  }