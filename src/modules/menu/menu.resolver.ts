import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MenuService } from './menu.service';
import { MenuEntity } from './entities/menu.entity';
import { CreateMenuItemDTO } from './dto/create-menu.dto';

@Resolver()
export class MenuResolver {
  constructor(private readonly menuService: MenuService) {}
  @Query(() => [MenuEntity], { name: 'menus' })
  async findAll(): Promise<MenuEntity[]> {
    return [
      {
        id: '',
        name: 'dgf',
        categoryId: 'fdgfd',
        flavors: [],
      },
    ];
  }

  @Query(() => MenuEntity, { name: 'menu' })
  async findOne(
    @Args('id', { type: () => Number }) id: string,
  ): Promise<MenuEntity> {
    return this.menuService.findOne(id);
  }

  @Mutation(() => MenuEntity, { name: 'createMenu', nullable: true })
  async create(@Args('createMenuInput') createMenuDTO: CreateMenuItemDTO) {}
}
