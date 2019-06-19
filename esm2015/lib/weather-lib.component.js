/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { WeatherLibService } from './weather-lib.service';
export class WeatherLibComponent {
    /**
     * @param {?} getWeatherDataService
     */
    constructor(getWeatherDataService) {
        this.getWeatherDataService = getWeatherDataService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} form
     * @return {?}
     */
    onSubmit(form) {
        this.errorMessage = '';
        this.city = form.value.city;
        if (isNaN(this.city)) {
            this.getWeatherDataService.getWeatherByName(this.city).subscribe((/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                this.weather = value;
            }), (/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                this.errorMessage = error;
            }));
        }
        else {
            this.zip = this.city;
            this.getWeatherDataService.getWeatherByZip(this.zip).subscribe((/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                this.weather = value;
            }), (/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                this.errorMessage = error;
            }));
        }
        form.reset();
    }
}
WeatherLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-weather-lib',
                template: "<nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <h3 class=\"navbar-brand\">Forecast</h3>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\r\n            <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"city\">City / ZIP</label>\r\n                    <div class=\"input-group\">\r\n                        <input id=\"city\" name=\"city\" ngModel class=\"form-control\"\r\n                            placeholder=\"Enter a city or a zip code\" required ngModel>\r\n                        <span class=\"input-group-btn\">\r\n                            <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid\">Search</button>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\" *ngIf=\"errorMessage\">\r\n            <span style=\"color: red\">{{errorMessage}}</span>\r\n        </div>\r\n    </div>\r\n    <hr>\r\n    <div class=\"row\" *ngIf=\"weather && !errorMessage\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n            <p class=\"text-center\"><b>{{weather.name + ', ' + weather.country}}</b>\r\n                <img src=\"http://openweathermap.org/img/w/{{weather.icon}}.png\" alt=\"icon\"></p>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-10 col-md-6\">\r\n            <p class=\"text-center\">{{weather.description |  titlecase}}</p>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-10 col-md-6\">\r\n            <p class=\"text-center\">{{'Temperature: ' +  weather.temp + ' C' }}</p>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-10 col-md-6\">\r\n            <p class=\"text-center\">{{'Max Temperature: ' +  weather.tempMax + ' C'}}</p>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-10 col-md-6\">\r\n            <p class=\"text-center\">{{'Min Temperature: ' +  weather.tempMin + ' C'}}</p>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-10 col-md-6\">\r\n            <p class=\"text-center\">{{'Humidity: ' + weather.humidity + '%'}}</p>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-10 col-md-6\">\r\n            <p class=\"text-center\">{{'Pressure: ' + weather.pressure + ' hPa'}}</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"!errorMessage\">\r\n        <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\r\n            <app-chart [currentCity]=\"city\"></app-chart>\r\n        </div>\r\n    </div>\r\n</div>"
            }] }
];
/** @nocollapse */
WeatherLibComponent.ctorParameters = () => [
    { type: WeatherLibService }
];
if (false) {
    /** @type {?} */
    WeatherLibComponent.prototype.city;
    /** @type {?} */
    WeatherLibComponent.prototype.zip;
    /** @type {?} */
    WeatherLibComponent.prototype.weather;
    /** @type {?} */
    WeatherLibComponent.prototype.forecast;
    /** @type {?} */
    WeatherLibComponent.prototype.errorMessage;
    /**
     * @type {?}
     * @private
     */
    WeatherLibComponent.prototype.getWeatherDataService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci1saWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vd2VhdGhlci1saWIvIiwic291cmNlcyI6WyJsaWIvd2VhdGhlci1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBUzFELE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFPOUIsWUFBb0IscUJBQXdDO1FBQXhDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBbUI7SUFBSSxDQUFDOzs7O0lBRWpFLFFBQVE7SUFDUixDQUFDOzs7OztJQUVNLFFBQVEsQ0FBQyxJQUFZO1FBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDNUIsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUzs7OztZQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ3pFLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLENBQUM7Ozs7WUFDQyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUNSLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzVCLENBQUMsRUFDRixDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTOzs7O1lBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDdkUsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDdkIsQ0FBQzs7OztZQUNDLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDNUIsQ0FBQyxFQUNGLENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7OztZQXZDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0Isd3pGQUEyQzthQUU1Qzs7OztZQVJRLGlCQUFpQjs7OztJQVV4QixtQ0FBaUI7O0lBQ2pCLGtDQUFtQjs7SUFDbkIsc0NBQXdCOztJQUN4Qix1Q0FBNEI7O0lBQzVCLDJDQUE0Qjs7Ozs7SUFFaEIsb0RBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgV2VhdGhlckxpYlNlcnZpY2UgfSBmcm9tICcuL3dlYXRoZXItbGliLnNlcnZpY2UnO1xuaW1wb3J0IHsgV2VhdGhlciB9IGZyb20gJy4vc2hhcmVkL3dlYXRoZXIubW9kZWwnO1xuaW1wb3J0IHsgRm9yZWNhc3QgfSBmcm9tICcuL3NoYXJlZC9mb3JlY2FzdC5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi13ZWF0aGVyLWxpYicsXG4gIHRlbXBsYXRlVXJsOiAnLi93ZWF0aGVyLWxpYi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgV2VhdGhlckxpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBjaXR5OiBhbnk7XG4gIHB1YmxpYyB6aXA6IG51bWJlcjtcbiAgcHVibGljIHdlYXRoZXI6IFdlYXRoZXI7XG4gIHB1YmxpYyBmb3JlY2FzdDogRm9yZWNhc3RbXTtcbiAgcHVibGljIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2V0V2VhdGhlckRhdGFTZXJ2aWNlOiBXZWF0aGVyTGliU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBwdWJsaWMgb25TdWJtaXQoZm9ybTogTmdGb3JtKTogdm9pZCB7XG4gICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcbiAgICB0aGlzLmNpdHkgPSBmb3JtLnZhbHVlLmNpdHk7XG4gICAgaWYgKGlzTmFOKHRoaXMuY2l0eSkpIHtcbiAgICAgIHRoaXMuZ2V0V2VhdGhlckRhdGFTZXJ2aWNlLmdldFdlYXRoZXJCeU5hbWUodGhpcy5jaXR5KS5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgIHRoaXMud2VhdGhlciA9IHZhbHVlO1xuICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy56aXAgPSB0aGlzLmNpdHk7XG4gICAgICB0aGlzLmdldFdlYXRoZXJEYXRhU2VydmljZS5nZXRXZWF0aGVyQnlaaXAodGhpcy56aXApLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgICAgdGhpcy53ZWF0aGVyID0gdmFsdWU7XG4gICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGVycm9yO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgICBmb3JtLnJlc2V0KCk7XG4gIH1cbn1cbiJdfQ==