import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import appConfig from './config/app.config';
// import * as Joi from '@hapi/joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
      // validationSchema: Joi.object({
      //   DATABASE_HOST: Joi.required(), // 验证环境变量
      //   DATABASE_PORT: Joi.number().default(3306),
      // }),
    }),
    CoffeesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE, // 数据库名
      autoLoadEntities: true, // 自动加载实体
      synchronize: true, // 同步数据库,可以使@Entity() 装饰器的类自动生成SQL表以及数据等，生产环境需要关闭
    }),
    CoffeeRatingModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
