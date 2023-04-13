import { Injectable } from '@nestjs/common';
import { UserEntity } from './entities/User.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class UserService {
  constructor(private connection: DataSource) {}
  async findOne(id: string): Promise<UserEntity> {
    const data = await this.connection
      .getRepository(UserEntity)
      .findOne({ where: { id } });

    return data;
  }
}
