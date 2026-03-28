import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signin() {
    return { msg: "I'm signed in" };
  }

  signup() {
    return { msg: "I'm signed up" };
  }
}
