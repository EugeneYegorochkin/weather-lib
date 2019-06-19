/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from './weather.model';
import { map, catchError } from 'rxjs/operators';
import { BaseWeather } from './base-weather.service';
import { Forecast } from './forecast.model';
import { throwError } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var GetDataService = /** @class */ (function (_super) {
    tslib_1.__extends(GetDataService, _super);
    function GetDataService(http) {
        var _this = _super.call(this, '', http) || this;
        _this.currentForecast = [];
        _this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return _this;
    }
    /**
     * @param {?} city
     * @return {?}
     */
    GetDataService.prototype.getDataByName = /**
     * @param {?} city
     * @return {?}
     */
    function (city) {
        var _this = this;
        return this.getDataByCityName(city).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.mapWeather(res);
            return _this.currentWeather;
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            _this.errorMessage = '';
            _this.errorMessage = 'City not found. Please enter city or ZIP correctly';
            return throwError(_this.errorMessage);
        })));
    };
    /**
     * @param {?} zip
     * @return {?}
     */
    GetDataService.prototype.getDataByZip = /**
     * @param {?} zip
     * @return {?}
     */
    function (zip) {
        var _this = this;
        return this.getDataByCityZip(zip).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.mapWeather(res);
            return _this.currentWeather;
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            _this.errorMessage = '';
            _this.errorMessage = 'City not found. Please enter city or ZIP correctly';
            return throwError(_this.errorMessage);
        })));
    };
    /**
     * @param {?} city
     * @return {?}
     */
    GetDataService.prototype.getForecastByName = /**
     * @param {?} city
     * @return {?}
     */
    function (city) {
        var _this = this;
        return this.getForecastByCityName(city).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.currentForecast.splice(0, _this.currentForecast.length);
            for (var i = 0; i < res.list.length; i++) {
                _this.currentForecast.push(new Forecast(Math.round(res.list[i].temp.day), new Date((res.list[i].dt) * 1000).getDate() + ',' +
                    _this.months[new Date((res.list[i].dt) * 1000).getMonth()]));
            }
            return _this.currentForecast;
        })));
    };
    /**
     * @private
     * @param {?} res
     * @return {?}
     */
    GetDataService.prototype.mapWeather = /**
     * @private
     * @param {?} res
     * @return {?}
     */
    function (res) {
        this.currentWeather = new Weather(res.name, res.sys.country, res.weather[0].description, res.weather[0].icon, res.main.temp, res.main.temp_max, res.main.temp_min, res.main.pressure, res.main.humidity);
    };
    GetDataService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    GetDataService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ GetDataService.ngInjectableDef = i0.defineInjectable({ factory: function GetDataService_Factory() { return new GetDataService(i0.inject(i1.HttpClient)); }, token: GetDataService, providedIn: "root" });
    return GetDataService;
}(BaseWeather));
export { GetDataService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWRhdGEtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dlYXRoZXItbGliLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9nZXQtZGF0YS1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFxQixNQUFNLHNCQUFzQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDNUMsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBRTlDO0lBR29DLDBDQUFXO0lBTTdDLHdCQUFZLElBQWdCO1FBQTVCLFlBQ0Usa0JBQU0sRUFBRSxFQUFFLElBQUksQ0FBQyxTQUNoQjtRQU5PLHFCQUFlLEdBQWUsRUFBRSxDQUFDO1FBQ2pDLFlBQU0sR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7O0lBS3RHLENBQUM7Ozs7O0lBRU0sc0NBQWE7Ozs7SUFBcEIsVUFBcUIsSUFBWTtRQUFqQyxpQkFjQztRQWJDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFVLElBQUksQ0FBQyxDQUFDLElBQUksQ0FFN0MsR0FBRzs7OztRQUFDLFVBQUMsR0FBUTtZQUNYLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckIsT0FBTyxL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QU07aUJBQ25COzs7O2dCQVRRLFVBQVU7Ozt5QkFEbkI7Q0FtRkMsQUEzRUQsQ0FHb0MsV0FBVyxHQXdFOUM7U0F4RVksY0FBYzs7Ozs7O0lBQ3pCLHdDQUFnQzs7Ozs7SUFDaEMseUNBQXlDOzs7OztJQUN6QyxnQ0FBc0c7O0lBQ3RHLHNDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgV2VhdGhlciB9IGZyb20gJy4vd2VhdGhlci5tb2RlbCc7XG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBCYXNlV2VhdGhlciB9IGZyb20gJy4vYmFzZS13ZWF0aGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRm9yZWNhc3QgfSBmcm9tICcuL2ZvcmVjYXN0Lm1vZGVsJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgR2V0RGF0YVNlcnZpY2UgZXh0ZW5kcyBCYXNlV2VhdGhlciB7XG4gIHByaXZhdGUgY3VycmVudFdlYXRoZXI6IFdlYXRoZXI7XG4gIHByaXZhdGUgY3VycmVudEZvcmVjYXN0OiBGb3JlY2FzdFtdID0gW107XG4gIHByaXZhdGUgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddO1xuICBwdWJsaWMgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoaHR0cDogSHR0cENsaWVudCkge1xuICAgIHN1cGVyKCcnLCBodHRwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXREYXRhQnlOYW1lKGNpdHk6IHN0cmluZyk6IE9ic2VydmFibGU8V2VhdGhlcj4ge1xuICAgIHJldHVybiB0aGlzLmdldERhdGFCeUNpdHlOYW1lPFdlYXRoZXI+KGNpdHkpLnBpcGVcbiAgICAgIChcbiAgICAgICAgbWFwKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMubWFwV2VhdGhlcihyZXMpO1xuICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRXZWF0aGVyO1xuICAgICAgICB9XG4gICAgICAgICksXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XG4gICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnQ2l0eSBub3QgZm91bmQuIFBsZWFzZSBlbnRlciBjaXR5IG9yIFpJUCBjb3JyZWN0bHknO1xuICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKHRoaXMuZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RGF0YUJ5WmlwKHppcDogbnVtYmVyKTogT2JzZXJ2YWJsZTxXZWF0aGVyPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RGF0YUJ5Q2l0eVppcDxXZWF0aGVyPih6aXApLnBpcGVcbiAgICAgIChcbiAgICAgICAgbWFwKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMubWFwV2VhdGhlcihyZXMpO1xuICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRXZWF0aGVyO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcbiAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICdDaXR5IG5vdCBmb3VuZC4gUGxlYXNlIGVudGVyIGNpdHkgb3IgWklQIGNvcnJlY3RseSc7XG4gICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IodGhpcy5lcnJvck1lc3NhZ2UpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGb3JlY2FzdEJ5TmFtZShjaXR5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPEZvcmVjYXN0W10+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRGb3JlY2FzdEJ5Q2l0eU5hbWU8Rm9yZWNhc3Q+KGNpdHkpLnBpcGVcbiAgICAgIChcbiAgICAgICAgbWFwKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuY3VycmVudEZvcmVjYXN0LnNwbGljZSgwLCB0aGlzLmN1cnJlbnRGb3JlY2FzdC5sZW5ndGgpO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzLmxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEZvcmVjYXN0LnB1c2gobmV3IEZvcmVjYXN0KFxuICAgICAgICAgICAgICBNYXRoLnJvdW5kKHJlcy5saXN0W2ldLnRlbXAuZGF5KSxcbiAgICAgICAgICAgICAgbmV3IERhdGUoKHJlcy5saXN0W2ldLmR0KSAqIDEwMDApLmdldERhdGUoKSArICcsJyArXG4gICAgICAgICAgICAgIHRoaXMubW9udGhzW25ldyBEYXRlKChyZXMubGlzdFtpXS5kdCkgKiAxMDAwKS5nZXRNb250aCgpXVxuICAgICAgICAgICAgKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudEZvcmVjYXN0O1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgbWFwV2VhdGhlcihyZXM6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuY3VycmVudFdlYXRoZXIgPSBuZXcgV2VhdGhlcihcbiAgICAgIHJlcy5uYW1lLFxuICAgICAgcmVzLnN5cy5jb3VudHJ5LFxuICAgICAgcmVzLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXG4gICAgICByZXMud2VhdGhlclswXS5pY29uLFxuICAgICAgcmVzLm1haW4udGVtcCxcbiAgICAgIHJlcy5tYWluLnRlbXBfbWF4LFxuICAgICAgcmVzLm1haW4udGVtcF9taW4sXG4gICAgICByZXMubWFpbi5wcmVzc3VyZSxcbiAgICAgIHJlcy5tYWluLmh1bWlkaXR5XG4gICAgKTtcbiAgfVxufVxuIl19