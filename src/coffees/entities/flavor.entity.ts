// 模拟一个咖啡实体类
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Coffee } from './coffee.entity';

@Entity() // sql table ==='coffee'
export class Flavor {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @ManyToMany(type => Coffee, (coffee) => coffee.flavors)
  coffee: Coffee[];
}
