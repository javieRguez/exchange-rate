import { Module } from '@nestjs/common';
import { ExchangeRateController } from './exchangeRate.controller';
import { ExchangeRateService } from './exchangeRate.service';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [HttpModule],
    controllers: [ExchangeRateController],
    providers: [ExchangeRateService],
})
export class ExchangeRateModule { }
