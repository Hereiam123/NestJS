import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '54356',
      name: 'Item One',
      qty: 2,
      description: 'This is item one',
    },
    {
      id: '54436356',
      name: 'Item Two',
      qty: 5,
      description: 'This is item two',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }
}
