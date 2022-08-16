import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';

@Module({
  imports: [
    CoffeesModule,
    TypeOrmModule.forRoot({
      type: 'mysql', // 数据库类型
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'db_nest_study', // 数据库名
      autoLoadEntities: true, // 自动加载实体
      synchronize: true, // 同步数据库,可以使@Entity() 装饰器的类自动生成SQL表以及数据等，生产环境需要关闭
    }),
    CoffeeRatingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
