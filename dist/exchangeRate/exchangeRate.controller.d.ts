import { ExchangeRateService } from './exchangeRate.service';
export declare class ExchangeRateController {
    private readonly exchangeRateService;
    constructor(exchangeRateService: ExchangeRateService);
    getExchangeRate(startDate: string, endDate: string, authHeader: string): import("rxjs").Observable<any>;
}
