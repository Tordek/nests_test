import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Broken } from 'producer';
import { Working } from './types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/broken")
  broken(@Query() query: Broken): string {
    console.log(query);
    return this.appService.getHello();
  }

  @Get("/working")
  working(@Query() query: Working): string {
    console.log(query);
    return this.appService.getHello();
  }
}
