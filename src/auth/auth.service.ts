import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, password: string): Promise<any> {
    // Verify: user 저장소에서 해당 유저가 있는지 확인
    const user = await this.usersService.findOne(email);

    // Compare: 저장된 user의 암호화 입력된 암호가 같은지 확인
    const hased = await bcrypt.hash(password, 10);
    const isMatch = await bcrypt.compare(user.password, hased);

    if (!isMatch) null;

    // TODO: password 제거
    return user;
  }
}
