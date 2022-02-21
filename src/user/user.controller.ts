import {
    Body,
    Controller,
    Post,
  } from '@nestjs/common';

import { CreateUserDTO } from './dto/create.user.dto';
import { UserService } from './user.service';
  
  @Controller('users')
  export class UserController {
    constructor(private readonly service: UserService) {}
  
    @Post()
    async create(@Body() createUserDto: CreateUserDTO) {
      return await this.service.create(createUserDto);
    }

  }