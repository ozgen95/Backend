import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  // expects some instance of authService class, doesn't create it itself just expects
  // controller has as an attribute authService by declaring private within the constructor
  constructor(private authService: AuthService) {}

  @Post('signin')
  signin() {
    return this.authService.signin();
  }

  @Post('signup')
  signup() {
    return this.authService.signup();
  }
}
