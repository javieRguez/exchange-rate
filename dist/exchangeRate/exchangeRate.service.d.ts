import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
export declare class ExchangeRateService {
    private readonly httpService;
    private readonly apiUrl;
    constructor(httpService: HttpService);
    getExchangeRate(startDate: string, endDate: string, tokenBmx: string): Observable<AxiosResponse<any>>;
}
