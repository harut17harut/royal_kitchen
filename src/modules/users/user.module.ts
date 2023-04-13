import { Module } from '@nestjs/common';
import { UserResolver } from './User.resolver';
import { UserService } from './User.service';

@Module({
  providers: [UserResolver, UserService],
})
export class UserModule {}
