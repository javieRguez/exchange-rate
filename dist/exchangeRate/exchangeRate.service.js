"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeRateService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
let ExchangeRateService = class ExchangeRateService {
    constructor(httpService) {
        this.httpService = httpService;
        this.apiUrl = 'https:///www.banxico.org.mx/SieAPIRest/service/v1/series/SF43718/datos';
    }
    getExchangeRate(startDate, endDate, tokenBmx) {
        const url = `${this.apiUrl}/${startDate}/${endDate}`;
        const headers = { 'Bmx-Token': tokenBmx };
        return this.httpService.get(url, { headers });
    }
};
exports.ExchangeRateService = ExchangeRateService;
exports.ExchangeRateService = ExchangeRateService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], ExchangeRateService);
//# sourceMappingURL=exchangeRate.service.js.map