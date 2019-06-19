/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from './weather.model';
import { map, catchError } from 'rxjs/operators';
import { BaseWeather } from './base-weather.service';
import { Forecast } from './forecast.model';
import { throwError } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class GetDataService extends BaseWeather {
    /**
     * @param {?} http
     */
    constructor(http) {
        super('', http);
        this.currentForecast = [];
        this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    }
    /**
     * @param {?} city
     * @return {?}
     */
    getDataByName(city) {
        return this.getDataByCityName(city).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            this.mapWeather(res);
            return this.currentWeather;
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            this.errorMessage = '';
            this.errorMessage = 'City not found. Please enter city or ZIP correctly';
            return throwError(this.errorMessage);
        })));
    }
    /**
     * @param {?} zip
     * @return {?}
     */
    getDataByZip(zip) {
        return this.getDataByCityZip(zip).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            this.mapWeather(res);
            return this.currentWeather;
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            this.errorMessage = '';
            this.errorMessage = 'City not found. Please enter city or ZIP correctly';
            return throwError(this.errorMessage);
        })));
    }
    /**
     * @param {?} city
     * @return {?}
     */
    getForecastByName(city) {
        return this.getForecastByCityName(city).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            this.currentForecast.splice(0, this.currentForecast.length);
            for (let i = 0; i < res.list.length; i++) {
                this.currentForecast.push(new Forecast(Math.round(res.list[i].temp.day), new Date((res.list[i].dt) * 1000).getDate() + ',' +
                    this.months[new Date((res.list[i].dt) * 1000).getMonth()]));
            }
            return this.currentForecast;
        })));
    }
    /**
     * @private
     * @param {?} res
     * @return {?}
     */
    mapWeather(res) {
        this.currentWeather = new Weather(res.name, res.sys.country, res.weather[0].description, res.weather[0].icon, res.main.temp, res.main.temp_max, res.main.temp_min, res.main.pressure, res.main.humidity);
    }
}
GetDataService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
GetDataService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ GetDataService.ngInjectableDef = i0.defineInjectable({ factory: function GetDataService_Factory() { return new GetDataService(i0.inject(i1.HttpClient)); }, token: GetDataService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    GetDataService.prototype.currentWeather;
    /**
     * @type {?}
     * @private
     */
    GetDataService.prototype.currentForecast;
    /**
     * @type {?}
     * @private
     */
    GetDataService.prototype.months;
    /** @type {?} */
    GetDataService.prototype.errorMessage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWRhdGEtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dlYXRoZXItbGliLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9nZXQtZGF0YS1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQXFCLE1BQU0sc0JBQXNCLENBQUM7QUFDckUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM1QyxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFLOUMsTUFBTSxPQUFPLGNBQWUsU0FBUSxXQUFXOzs7O0lBTTdDLFlBQVksSUFBZ0I7UUFDMUIsS0FBSyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUxWLG9CQUFlLEdBQWUsRUFBRSxDQUFDO1FBQ2pDLFdBQU0sR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFLdEcsQ0FBQzs7Ozs7SUFFTSxhQUFhLENBQUMsSUFBWTtRQUMvQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBVSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBRTdDLEdBQUc7Ozs7UUFBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyQixPQUFPLElB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VUFBVTs7Ozs7Ozs7SUFXakIsd0NBQWdDOzs7OztJQUNoQyx5Q0FBeUM7Ozs7O0lBQ3pDLGdDQUFzRzs7SUFDdEcsc0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBXZWF0aGVyIH0gZnJvbSAnLi93ZWF0aGVyLm1vZGVsJztcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEJhc2VXZWF0aGVyIH0gZnJvbSAnLi9iYXNlLXdlYXRoZXIuc2VydmljZSc7XG5pbXBvcnQgeyBGb3JlY2FzdCB9IGZyb20gJy4vZm9yZWNhc3QubW9kZWwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBHZXREYXRhU2VydmljZSBleHRlbmRzIEJhc2VXZWF0aGVyIHtcbiAgcHJpdmF0ZSBjdXJyZW50V2VhdGhlcjogV2VhdGhlcjtcbiAgcHJpdmF0ZSBjdXJyZW50Rm9yZWNhc3Q6IEZvcmVjYXN0W10gPSBbXTtcbiAgcHJpdmF0ZSBtb250aHMgPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ107XG4gIHB1YmxpYyBlcnJvck1lc3NhZ2U6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihodHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgc3VwZXIoJycsIGh0dHApO1xuICB9XG5cbiAgcHVibGljIGdldERhdGFCeU5hbWUoY2l0eTogc3RyaW5nKTogT2JzZXJ2YWJsZTxXZWF0aGVyPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RGF0YUJ5Q2l0eU5hbWU8V2VhdGhlcj4oY2l0eSkucGlwZVxuICAgICAgKFxuICAgICAgICBtYXAoKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5tYXBXZWF0aGVyKHJlcyk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFdlYXRoZXI7XG4gICAgICAgIH1cbiAgICAgICAgKSxcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcbiAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICdDaXR5IG5vdCBmb3VuZC4gUGxlYXNlIGVudGVyIGNpdHkgb3IgWklQIGNvcnJlY3RseSc7XG4gICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IodGhpcy5lcnJvck1lc3NhZ2UpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXREYXRhQnlaaXAoemlwOiBudW1iZXIpOiBPYnNlcnZhYmxlPFdlYXRoZXI+IHtcbiAgICByZXR1cm4gdGhpcy5nZXREYXRhQnlDaXR5WmlwPFdlYXRoZXI+KHppcCkucGlwZVxuICAgICAgKFxuICAgICAgICBtYXAoKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5tYXBXZWF0aGVyKHJlcyk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFdlYXRoZXI7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJ0NpdHkgbm90IGZvdW5kLiBQbGVhc2UgZW50ZXIgY2l0eSBvciBaSVAgY29ycmVjdGx5JztcbiAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcih0aGlzLmVycm9yTWVzc2FnZSk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgcHVibGljIGdldEZvcmVjYXN0QnlOYW1lKGNpdHk6IHN0cmluZyk6IE9ic2VydmFibGU8Rm9yZWNhc3RbXT4ge1xuICAgIHJldHVybiB0aGlzLmdldEZvcmVjYXN0QnlDaXR5TmFtZTxGb3JlY2FzdD4oY2l0eSkucGlwZVxuICAgICAgKFxuICAgICAgICBtYXAoKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50Rm9yZWNhc3Quc3BsaWNlKDAsIHRoaXMuY3VycmVudEZvcmVjYXN0Lmxlbmd0aCk7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXMubGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Rm9yZWNhc3QucHVzaChuZXcgRm9yZWNhc3QoXG4gICAgICAgICAgICAgIE1hdGgucm91bmQocmVzLmxpc3RbaV0udGVtcC5kYXkpLFxuICAgICAgICAgICAgICBuZXcgRGF0ZSgocmVzLmxpc3RbaV0uZHQpICogMTAwMCkuZ2V0RGF0ZSgpICsgJywnICtcbiAgICAgICAgICAgICAgdGhpcy5tb250aHNbbmV3IERhdGUoKHJlcy5saXN0W2ldLmR0KSAqIDEwMDApLmdldE1vbnRoKCldXG4gICAgICAgICAgICApKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50Rm9yZWNhc3Q7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBtYXBXZWF0aGVyKHJlczogYW55KTogdm9pZCB7XG4gICAgdGhpcy5jdXJyZW50V2VhdGhlciA9IG5ldyBXZWF0aGVyKFxuICAgICAgcmVzLm5hbWUsXG4gICAgICByZXMuc3lzLmNvdW50cnksXG4gICAgICByZXMud2VhdGhlclswXS5kZXNjcmlwdGlvbixcbiAgICAgIHJlcy53ZWF0aGVyWzBdLmljb24sXG4gICAgICByZXMubWFpbi50ZW1wLFxuICAgICAgcmVzLm1haW4udGVtcF9tYXgsXG4gICAgICByZXMubWFpbi50ZW1wX21pbixcbiAgICAgIHJlcy5tYWluLnByZXNzdXJlLFxuICAgICAgcmVzLm1haW4uaHVtaWRpdHlcbiAgICApO1xuICB9XG59XG4iXX0=