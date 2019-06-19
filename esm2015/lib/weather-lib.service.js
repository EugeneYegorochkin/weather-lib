/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { GetDataService } from './shared/get-data-service';
import * as i0 from "@angular/core";
import * as i1 from "./shared/get-data-service";
export class WeatherLibService {
    /**
     * @param {?} getDataService
     */
    constructor(getDataService) {
        this.getDataService = getDataService;
    }
    /**
     * @param {?} city
     * @return {?}
     */
    getWeatherByName(city) {
        return this.getDataService.getDataByName(city);
    }
    /**
     * @param {?} zip
     * @return {?}
     */
    getWeatherByZip(zip) {
        return this.getDataService.getDataByZip(zip);
    }
    /**
     * @param {?} city
     * @return {?}
     */
    getForecast(city) {
        return this.getDataService.getForecastByName(city);
    }
}
WeatherLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
WeatherLibService.ctorParameters = () => [
    { type: GetDataService }
];
/** @nocollapse */ WeatherLibService.ngInjectableDef = i0.defineInjectable({ factory: function WeatherLibService_Factory() { return new WeatherLibService(i0.inject(i1.GetDataService)); }, token: WeatherLibService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    WeatherLibService.prototype.getDataService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci1saWIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dlYXRoZXItbGliLyIsInNvdXJjZXMiOlsibGliL3dlYXRoZXItbGliLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7QUFRM0QsTUFBTSxPQUFPLGlCQUFpQjs7OztJQUU1QixZQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFBSSxDQUFDOzs7OztJQUVoRCxnQkFBZ0IsQ0FBQyxJQUFZO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFFTSxlQUFlLENBQUMsR0FBVztRQUNoQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRU0sV0FBVyxDQUFDLElBQVk7UUFDN0IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JELENBQUM7OztZQWpCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFQUSxjQUFjOzs7Ozs7OztJQVVULDJDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR2V0RGF0YVNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9nZXQtZGF0YS1zZXJ2aWNlJztcbmltcG9ydCB7IFdlYXRoZXIgfSBmcm9tICcuL3NoYXJlZC93ZWF0aGVyLm1vZGVsJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEZvcmVjYXN0IH0gZnJvbSAnLi9zaGFyZWQvZm9yZWNhc3QubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBXZWF0aGVyTGliU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBnZXREYXRhU2VydmljZTogR2V0RGF0YVNlcnZpY2UpIHsgfVxuXG4gIHB1YmxpYyBnZXRXZWF0aGVyQnlOYW1lKGNpdHk6IHN0cmluZyk6IE9ic2VydmFibGU8V2VhdGhlcj4ge1xuICAgIHJldHVybiB0aGlzLmdldERhdGFTZXJ2aWNlLmdldERhdGFCeU5hbWUoY2l0eSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0V2VhdGhlckJ5WmlwKHppcDogbnVtYmVyKTogT2JzZXJ2YWJsZTxXZWF0aGVyPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RGF0YVNlcnZpY2UuZ2V0RGF0YUJ5WmlwKHppcCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0Rm9yZWNhc3QoY2l0eTogc3RyaW5nKTogT2JzZXJ2YWJsZTxGb3JlY2FzdFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RGF0YVNlcnZpY2UuZ2V0Rm9yZWNhc3RCeU5hbWUoY2l0eSk7XG4gIH1cblxufVxuIl19