// 模拟一个咖啡实体类
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // sql table ==='coffee'
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  brand: string;
  @Column('json', { nullable: true })
  flavors: string[];
}
