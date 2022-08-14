import { IsString } from 'class-validator'; // 提供验证dto验证规则，自动响应为400

export class CreateCoffeeDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly brand: string;
  @IsString({ each: true })
  readonly flavors: string[];
}
