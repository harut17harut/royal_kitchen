import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('menu')
@ObjectType({ description: 'Menu Entity' })
export class MenuEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: string;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: false, name: 'category_id' })
  categoryId: string;
  flavors: string[];
}
