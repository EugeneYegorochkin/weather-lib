import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Injectable, Component, Input, NgModule, defineInjectable, inject } from '@angular/core';
import * as Highcharts from 'highcharts';
import { chart } from 'highcharts';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Weather {
    /**
     * @param {?} name
     * @param {?} country
     * @param {?} description
     * @param {?} icon
     * @param {?} temp
     * @param {?} tempMax
     * @param {?} tempMin
     * @param {?} pressure
     * @param {?} humidity
     */
    constructor(name, country, description, icon, temp, tempMax, tempMin, pressure, humidity) {
        this.name = name;
        this.country = country;
        this.description = description;
        this.icon = icon;
        this.temp = temp;
        this.tempMax = tempMax;
        this.tempMin = tempMin;
        this.pressure = pressure;
        this.humidity = humidity;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class BaseWeather {
    /**
     * @param {?} key
     * @param {?} http
     */
    constructor(key, http) {
        this.key = key;
        this.http = http;
        this.apiKey = '&appid=de4ced2e2547330fcc10bc405dddc049';
        this.configUrl = `http://api.openweathermap.org/data/2.5/${this.key}`;
        this.units = '&units=metric';
    }
    /**
     * @template T
     * @param {?} city
     * @return {?}
     */
    getDataByCityName(city) {
        return this.get(this.configUrl + 'weather?q=' + city + this.apiKey + this.units);
    }
    /**
     * @template T
     * @param {?} url
     * @return {?}
     */
    get(url) {
        return this.http.get(url);
    }
    /**
     * @template T
     * @param {?} zip
     * @return {?}
     */
    getDataByCityZip(zip) {
        return this.get(this.configUrl + 'weather?zip=' + zip + this.apiKey + this.units);
    }
    //  have not finished yet
    /**
     * @template T
     * @param {?} city
     * @return {?}
     */
    getForecastByCityName(city) {
        return this.get(this.configUrl + 'forecast/daily?q=' + city + this.apiKey + this.units);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Forecast {
    /**
     * @param {?} temp
     * @param {?} data
     */
    constructor(temp, data) {
        this.temp = temp;
        this.data = data;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GetDataService extends BaseWeather {
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
/** @nocollapse */ GetDataService.ngInjectableDef = defineInjectable({ factory: function GetDataService_Factory() { return new GetDataService(inject(HttpClient)); }, token: GetDataService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WeatherLibService {
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
/** @nocollapse */ WeatherLibService.ngInjectableDef = defineInjectable({ factory: function WeatherLibService_Factory() { return new WeatherLibService(inject(GetDataService)); }, token: WeatherLibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WeatherLibComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
let Boost = require('highcharts/modules/boost');
/** @type {?} */
let noData = require('highcharts/modules/no-data-to-display');
/** @type {?} */
let More = require('highcharts/highcharts-more');
Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);
class ChartComponent {
    /**
     * @param {?} weatherLibService
     */
    constructor(weatherLibService) {
        this.weatherLibService = weatherLibService;
        this.showForecast = false;
        this.currentData = [];
        this.currentTemp = [];
        this.highcharts = Highcharts;
        this.chartOptions = {
            title: {
                text: 'Forecast'
            },
            xAxis: {
                categories: this.currentData
            },
            yAxis: {
                title: {
                    text: 'Temperature °C'
                }
            },
            tooltip: {
                valueSuffix: ' °C'
            },
            series: [
                {
                    name: 'Temp',
                    type: 'column',
                    data: this.currentTemp
                }
            ]
        };
    }
    /**
     * @return {?}
     */
    onGetForecast() {
        this.weatherLibService.getForecast(this.currentCity).subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            this.currentData.splice(0, this.currentData.length);
            this.currentTemp.splice(0, this.currentTemp.length);
            for (let i = 0; i < value.length; i++) {
                this.currentData.push(value[i].data);
                this.currentTemp.push(value[i].temp);
            }
            chart('container', this.chartOptions);
            this.showForecast = true;
        }));
    }
    /**
     * @return {?}
     */
    onCloseForecast() {
        this.showForecast = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['currentCity']) {
            this.showForecast = false;
        }
    }
}
ChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-chart',
                template: "<button class=\"btn btn-primary center-block\" type=\"submit\" (click)=\"onGetForecast()\"\r\n    *ngIf=\"currentCity && !showForecast\">7 day\r\n    forecast</button>\r\n<div id=\"container\" class=\"{{showForecast? '': 'invisible'}}\"></div>\r\n<button class=\"btn btn-primary center-block closeForecastButton\" type=\"button\" *ngIf=\"showForecast\"\r\n    (click)=\"onCloseForecast()\">Close forecast</button>",
                styles: [".invisible{display:none}.closeForecastButton{margin-top:8px;margin-bottom:8px}"]
            }] }
];
/** @nocollapse */
ChartComponent.ctorParameters = () => [
    { type: WeatherLibService }
];
ChartComponent.propDecorators = {
    currentCity: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WeatherLibModule {
}
WeatherLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [WeatherLibComponent, ChartComponent],
                imports: [
                    BrowserModule,
                    CommonModule,
                    HttpClientModule,
                    FormsModule
                ],
                exports: [
                    WeatherLibComponent,
                    BrowserModule,
                    CommonModule,
                    HttpClientModule,
                    FormsModule
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { WeatherLibService, WeatherLibComponent, WeatherLibModule, BaseWeather as ɵb, GetDataService as ɵa, ChartComponent as ɵc };

//# sourceMappingURL=weather-lib.js.map