import { Controller, Get, Headers, Query } from '@nestjs/common';
import { ExchangeRateService } from './exchangeRate.service';
import { map } from 'rxjs/operators';

@Controller('exchangeRate')
export class ExchangeRateController {
  constructor(private readonly exchangeRateService: ExchangeRateService) { }

  @Get()
  getExchangeRate(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
    @Headers('Authorization') authHeader: string
  ) {
    const tokenBmx = authHeader.split(' ')[1];
    const result = this.exchangeRateService.getExchangeRate(startDate, endDate, tokenBmx).pipe(
      map(response => response.data)
    );;
    return result;
  }
}