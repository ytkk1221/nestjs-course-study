import { Injectable, Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from '../events/entities/event.entity';
import { COFFEE_BRANDS } from './coffees.constants';
import { Connection } from 'typeorm';

// @Injectable()
// export class CoffeeBrandsFactory {
//   create() {
//     /* ... do something ... */
//     return ['雀巢', '星巴克'];
//   }
// }

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])], // 导入实体
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    // CoffeeBrandsFactory,
    {
      provide: COFFEE_BRANDS,
      useFactory: async (connection: Connection): Promise<string[]> => {
        // const coffeeBrands = await connection.query('select * ...');
        // 模拟异步
        const coffeeBrands = await Promise.resolve(['星巴克', '瑞幸']);
        return coffeeBrands;
      },
      inject: [Connection],
    },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
