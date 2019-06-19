/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { GetDataService } from './shared/get-data-service';
import * as i0 from "@angular/core";
import * as i1 from "./shared/get-data-service";
var WeatherLibService = /** @class */ (function () {
    function WeatherLibService(getDataService) {
        this.getDataService = getDataService;
    }
    /**
     * @param {?} city
     * @return {?}
     */
    WeatherLibService.prototype.getWeatherByName = /**
     * @param {?} city
     * @return {?}
     */
    function (city) {
        return this.getDataService.getDataByName(city);
    };
    /**
     * @param {?} zip
     * @return {?}
     */
    WeatherLibService.prototype.getWeatherByZip = /**
     * @param {?} zip
     * @return {?}
     */
    function (zip) {
        return this.getDataService.getDataByZip(zip);
    };
    /**
     * @param {?} city
     * @return {?}
     */
    WeatherLibService.prototype.getForecast = /**
     * @param {?} city
     * @return {?}
     */
    function (city) {
        return this.getDataService.getForecastByName(city);
    };
    WeatherLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    WeatherLibService.ctorParameters = function () { return [
        { type: GetDataService }
    ]; };
    /** @nocollapse */ WeatherLibService.ngInjectableDef = i0.defineInjectable({ factory: function WeatherLibService_Factory() { return new WeatherLibService(i0.inject(i1.GetDataService)); }, token: WeatherLibService, providedIn: "root" });
    return WeatherLibService;
}());
export { WeatherLibService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    WeatherLibService.prototype.getDataService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci1saWIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dlYXRoZXItbGliLyIsInNvdXJjZXMiOlsibGliL3dlYXRoZXItbGliLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7QUFLM0Q7SUFLRSwyQkFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQUksQ0FBQzs7Ozs7SUFFaEQsNENBQWdCOzs7O0lBQXZCLFVBQXdCLElBQVk7UUFDbEMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7OztJQUVNLDJDQUFlOzs7O0lBQXRCLFVBQXVCLEdBQVc7UUFDaEMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7OztJQUVNLHVDQUFXOzs7O0lBQWxCLFVBQW1CLElBQVk7UUFDN0IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JELENBQUM7O2dCQWpCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVBRLGNBQWM7Ozs0QkFEdkI7Q0F5QkMsQUFuQkQsSUFtQkM7U0FoQlksaUJBQWlCOzs7Ozs7SUFFaEIsMkNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHZXREYXRhU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL2dldC1kYXRhLXNlcnZpY2UnO1xuaW1wb3J0IHsgV2VhdGhlciB9IGZyb20gJy4vc2hhcmVkL3dlYXRoZXIubW9kZWwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRm9yZWNhc3QgfSBmcm9tICcuL3NoYXJlZC9mb3JlY2FzdC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFdlYXRoZXJMaWJTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdldERhdGFTZXJ2aWNlOiBHZXREYXRhU2VydmljZSkgeyB9XG5cbiAgcHVibGljIGdldFdlYXRoZXJCeU5hbWUoY2l0eTogc3RyaW5nKTogT2JzZXJ2YWJsZTxXZWF0aGVyPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RGF0YVNlcnZpY2UuZ2V0RGF0YUJ5TmFtZShjaXR5KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRXZWF0aGVyQnlaaXAoemlwOiBudW1iZXIpOiBPYnNlcnZhYmxlPFdlYXRoZXI+IHtcbiAgICByZXR1cm4gdGhpcy5nZXREYXRhU2VydmljZS5nZXREYXRhQnlaaXAoemlwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGb3JlY2FzdChjaXR5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPEZvcmVjYXN0W10+IHtcbiAgICByZXR1cm4gdGhpcy5nZXREYXRhU2VydmljZS5nZXRGb3JlY2FzdEJ5TmFtZShjaXR5KTtcbiAgfVxuXG59XG4iXX0=