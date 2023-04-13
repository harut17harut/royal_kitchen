import { Args, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './User.service';
import { UserEntity } from './entities/User.entity';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { UserQueryNamesEnum } from './enums/user.enum';

@Resolver()
export class UserResolver {
  constructor(private readonly UserService: UserService) {}
  @Query(() => [UserEntity], { name: 'Users' })
  async findAll(): Promise<QueryDeepPartialEntity<UserEntity>[]> {
    return [
      {
        id: '',
      },
    ];
  }

  @Query(() => UserEntity, {
    name: UserQueryNamesEnum.UserById,
    nullable: true,
  })
  async findOne(
    @Args('id', { type: () => Number }) id: string,
  ): Promise<UserEntity> {
    return this.UserService.findOne(id);
  }

  /*  @Mutation(() => UserEntity, { name: 'createUser', nullable: true })
  async create(@Args('createUserInput') createUserDTO: CreateUserItemDTO) {} */
}
