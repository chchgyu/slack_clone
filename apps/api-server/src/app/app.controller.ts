import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUsers() {
    return [
      { id: 1, name: 'Zest Arinze' },
      { id: 2, name: 'Kiso Alonso' },
      { id: 3, name: 'Mike Loko' },
      { id: 4, name: 'John Woo' },
    ];
  }
}
