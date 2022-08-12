import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

/*服务是业务逻辑的核心以及和数据源的交互*/
@Injectable()
export class CoffeesService {
  // 模拟一个咖啡数组暂时存储数据,
  private coffees: Coffee[] = [
    {
      id: 1,
      name: '雀巢咖啡',
      brand: '雀巢咖啡',
      flavors: ['原味', '奶香'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    console.log(id);
    console.log(+id);
    return this.coffees.find((item) => item.id === +id);
  }

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
  }

  update(id: string, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      //  修改
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
