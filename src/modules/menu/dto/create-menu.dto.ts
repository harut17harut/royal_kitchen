import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType({description:'Create menu item DTO'})
export class CreateMenuItemDTO {
  @IsNotEmpty()
  @Field(()=>String)
  name: string;
}
