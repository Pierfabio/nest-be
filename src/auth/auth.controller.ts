import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('login')
export class AuthController {

  constructor(private authService: AuthService){}
  
  @UseGuards(AuthGuard('local'))
  @Post()
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}