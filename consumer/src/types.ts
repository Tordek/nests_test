import { Type } from "class-transformer";
import { IsNumber } from "class-validator";

export class Working {
  @IsNumber()
  @Type(() => Number)
  aNumber: number;
}