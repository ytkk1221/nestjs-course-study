import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'; // 提供验证dto验证规则，自动响应为400

export class CreateCoffeeDto {
  @ApiProperty({ description: '咖啡名' })
  @IsString()
  readonly name: string;

  @ApiProperty({ description: '咖啡品牌' })
  @IsString()
  readonly brand: string;

  @ApiProperty({ example: [] })
  @IsString({ each: true })
  readonly flavors: string[];
}
