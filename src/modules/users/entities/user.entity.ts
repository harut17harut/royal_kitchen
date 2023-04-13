import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
@ObjectType({ description: 'User Entity' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: string;

  @Column({ type: 'varchar', nullable: false, name: 'first_name' })
  firstName: string;
}
