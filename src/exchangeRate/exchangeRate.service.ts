import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class ExchangeRateService {
    private readonly apiUrl = 'https:///www.banxico.org.mx/SieAPIRest/service/v1/series/SF43718/datos';

    constructor(private readonly httpService: HttpService) { }

    getExchangeRate(startDate: string, endDate: string, tokenBmx: string): Observable<AxiosResponse<any>> {
        const url = `${this.apiUrl}/${startDate}/${endDate}`;
        const headers = { 'Bmx-Token': tokenBmx };

        return this.httpService.get(url, { headers });
    }
}
