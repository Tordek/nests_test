import { Type } from "class-transformer";
import { IsNumber } from "class-validator";

export class Broken {
  @IsNumber()
  @Type(() => Number)
  aNumber: number;
}