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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeRateController = void 0;
const common_1 = require("@nestjs/common");
const exchangeRate_service_1 = require("./exchangeRate.service");
const operators_1 = require("rxjs/operators");
let ExchangeRateController = class ExchangeRateController {
    constructor(exchangeRateService) {
        this.exchangeRateService = exchangeRateService;
    }
    getExchangeRate(startDate, endDate, authHeader) {
        const tokenBmx = authHeader.split(' ')[1];
        const result = this.exchangeRateService.getExchangeRate(startDate, endDate, tokenBmx).pipe((0, operators_1.map)(response => response.data));
        ;
        return result;
    }
};
exports.ExchangeRateController = ExchangeRateController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('startDate')),
    __param(1, (0, common_1.Query)('endDate')),
    __param(2, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], ExchangeRateController.prototype, "getExchangeRate", null);
exports.ExchangeRateController = ExchangeRateController = __decorate([
    (0, common_1.Controller)('exchangeRate'),
    __metadata("design:paramtypes", [exchangeRate_service_1.ExchangeRateService])
], ExchangeRateController);
//# sourceMappingURL=exchangeRate.controller.js.map