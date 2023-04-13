import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType({description:'Create User item DTO'})
export class CreateUserItemDTO {
  @IsNotEmpty()
  @Field(()=>String)
  name: string;
}
