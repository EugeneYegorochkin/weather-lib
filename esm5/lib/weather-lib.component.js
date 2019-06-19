/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { WeatherLibService } from './weather-lib.service';
var WeatherLibComponent = /** @class */ (function () {
    function WeatherLibComponent(getWeatherDataService) {
        this.getWeatherDataService = getWeatherDataService;
    }
    /**
     * @return {?}
     */
    WeatherLibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} form
     * @return {?}
     */
    WeatherLibComponent.prototype.onSubmit = /**
     * @param {?} form
     * @return {?}
     */
    function (form) {
        var _this = this;
        this.errorMessage = '';
        this.city = form.value.city;
        if (isNaN(this.city)) {
            this.getWeatherDataService.getWeatherByName(this.city).subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this.weather = value;
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                _this.errorMessage = error;
            }));
        }
        else {
            this.zip = this.city;
            this.getWeatherDataService.getWeatherByZip(this.zip).subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this.weather = value;
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                _this.errorMessage = error;
            }));
        }
        form.reset();
    };
    WeatherLibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-weather-lib',
                    template: "<nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <h3 class=\"navbar-brand\">Forecast</h3>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\r\n            <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"city\">City / ZIP</label>\r\n                    <div class=\"input-group\">\r\n                        <input id=\"city\" name=\"city\" ngModel class=\"form-control\"\r\n                            placeholder=\"Enter a city or a zip code\" required ngModel>\r\n                        <span class=\"input-group-btn\">\r\n                            <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid\">Search</button>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\" *ngIf=\"errorMessage\">\r\n            <span style=\"color: red\">{{errorMessage}}</span>\r\n        </div>\r\n    </div>\r\n    <hr>\r\n    <div class=\"row\" *ngIf=\"weather && !errorMessage\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n            <p class=\"text-center\"><b>{{weather.name + ', ' + weather.country}}</b>\r\n                <img src=\"http://openweathermap.org/img/w/{{weather.icon}}.png\" alt=\"icon\"></p>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-10 col-md-6\">\r\n            <p class=\"text-center\">{{weather.description |  titlecase}}</p>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-10 col-md-6\">\r\n            <p class=\"text-center\">{{'Temperature: ' +  weather.temp + ' C' }}</p>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-10 col-md-6\">\r\n            <p class=\"text-center\">{{'Max Temperature: ' +  weather.tempMax + ' C'}}</p>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-10 col-md-6\">\r\n            <p class=\"text-center\">{{'Min Temperature: ' +  weather.tempMin + ' C'}}</p>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-10 col-md-6\">\r\n            <p class=\"text-center\">{{'Humidity: ' + weather.humidity + '%'}}</p>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-10 col-md-6\">\r\n            <p class=\"text-center\">{{'Pressure: ' + weather.pressure + ' hPa'}}</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"!errorMessage\">\r\n        <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\r\n            <app-chart [currentCity]=\"city\"></app-chart>\r\n        </div>\r\n    </div>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    WeatherLibComponent.ctorParameters = function () { return [
        { type: WeatherLibService }
    ]; };
    return WeatherLibComponent;
}());
export { WeatherLibComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci1saWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vd2VhdGhlci1saWIvIiwic291cmNlcyI6WyJsaWIvd2VhdGhlci1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBSTFEO0lBWUUsNkJBQW9CLHFCQUF3QztRQUF4QywwQkFBcUIsR0FBckIscUJBQXFCLENBQW1CO0lBQUksQ0FBQzs7OztJQUVqRSxzQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7OztJQUVNLHNDQUFROzs7O0lBQWYsVUFBZ0IsSUFBWTtRQUE1QixpQkFzQkM7UUFyQkMsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztRQUM1QixJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQyxLQUFLO2dCQUNyRSxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUN2QixDQUFDOzs7O1lBQ0MsVUFBQyxLQUFLO2dCQUNKLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzVCLENBQUMsRUFDRixDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQyxLQUFLO2dCQUNuRSxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUN2QixDQUFDOzs7O1lBQ0MsVUFBQyxLQUFLO2dCQUNKLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzVCLENBQUMsRUFDRixDQUFDO1NBQ0g7UUFDRCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDOztnQkF2Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLHd6RkFBMkM7aUJBRTVDOzs7O2dCQVJRLGlCQUFpQjs7SUE0QzFCLDBCQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7U0FuQ1ksbUJBQW1COzs7SUFDOUIsbUNBQWlCOztJQUNqQixrQ0FBbUI7O0lBQ25CLHNDQUF3Qjs7SUFDeEIsdUNBQTRCOztJQUM1QiwyQ0FBNEI7Ozs7O0lBRWhCLG9EQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFdlYXRoZXJMaWJTZXJ2aWNlIH0gZnJvbSAnLi93ZWF0aGVyLWxpYi5zZXJ2aWNlJztcbmltcG9ydCB7IFdlYXRoZXIgfSBmcm9tICcuL3NoYXJlZC93ZWF0aGVyLm1vZGVsJztcbmltcG9ydCB7IEZvcmVjYXN0IH0gZnJvbSAnLi9zaGFyZWQvZm9yZWNhc3QubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItd2VhdGhlci1saWInLFxuICB0ZW1wbGF0ZVVybDogJy4vd2VhdGhlci1saWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFdlYXRoZXJMaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgY2l0eTogYW55O1xuICBwdWJsaWMgemlwOiBudW1iZXI7XG4gIHB1YmxpYyB3ZWF0aGVyOiBXZWF0aGVyO1xuICBwdWJsaWMgZm9yZWNhc3Q6IEZvcmVjYXN0W107XG4gIHB1YmxpYyBlcnJvck1lc3NhZ2U6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdldFdlYXRoZXJEYXRhU2VydmljZTogV2VhdGhlckxpYlNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgcHVibGljIG9uU3VibWl0KGZvcm06IE5nRm9ybSk6IHZvaWQge1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XG4gICAgdGhpcy5jaXR5ID0gZm9ybS52YWx1ZS5jaXR5O1xuICAgIGlmIChpc05hTih0aGlzLmNpdHkpKSB7XG4gICAgICB0aGlzLmdldFdlYXRoZXJEYXRhU2VydmljZS5nZXRXZWF0aGVyQnlOYW1lKHRoaXMuY2l0eSkuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgICB0aGlzLndlYXRoZXIgPSB2YWx1ZTtcbiAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuemlwID0gdGhpcy5jaXR5O1xuICAgICAgdGhpcy5nZXRXZWF0aGVyRGF0YVNlcnZpY2UuZ2V0V2VhdGhlckJ5WmlwKHRoaXMuemlwKS5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgIHRoaXMud2VhdGhlciA9IHZhbHVlO1xuICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gICAgZm9ybS5yZXNldCgpO1xuICB9XG59XG4iXX0=