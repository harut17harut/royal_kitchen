import { Injectable } from '@nestjs/common';
import { MenuEntity } from './entities/menu.entity';

@Injectable()
export class MenuService {
  async findOne(id: string): Promise<MenuEntity> {
    console.log('sdfds');
    
    return {
      id: '1',
      name: '2',
      categoryId: 'kkk',
      flavors: [],
    };
  }
}
