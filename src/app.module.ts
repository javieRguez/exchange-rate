import { Module } from '@nestjs/common';
import { ExchangeRateModule } from './exchangeRate/exchangeRate.module';

@Module({
  imports: [ExchangeRateModule],
  controllers: [],
  providers: [],
})
export class AppModule { }