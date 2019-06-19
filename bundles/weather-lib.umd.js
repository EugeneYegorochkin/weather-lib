(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs/operators'), require('rxjs'), require('@angular/common'), require('@angular/common/http'), require('@angular/forms'), require('@angular/platform-browser'), require('@angular/core'), require('highcharts')) :
    typeof define === 'function' && define.amd ? define('weather-lib', ['exports', 'rxjs/operators', 'rxjs', '@angular/common', '@angular/common/http', '@angular/forms', '@angular/platform-browser', '@angular/core', 'highcharts'], factory) :
    (factory((global['weather-lib'] = {}),global.rxjs.operators,global.rxjs,global.ng.common,global.ng.common.http,global.ng.forms,global.ng.platformBrowser,global.ng.core,global.Highcharts));
}(this, (function (exports,operators,rxjs,common,i1,forms,platformBrowser,i0,Highcharts) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Weather = /** @class */ (function () {
        function Weather(name, country, description, icon, temp, tempMax, tempMin, pressure, humidity) {
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
        return Weather;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ BaseWeather = /** @class */ (function () {
        function BaseWeather(key, http) {
            this.key = key;
            this.http = http;
            this.apiKey = '&appid=de4ced2e2547330fcc10bc405dddc049';
            this.configUrl = "http://api.openweathermap.org/data/2.5/" + this.key;
            this.units = '&units=metric';
        }
        /**
         * @template T
         * @param {?} city
         * @return {?}
         */
        BaseWeather.prototype.getDataByCityName = /**
         * @template T
         * @param {?} city
         * @return {?}
         */
            function (city) {
                return this.get(this.configUrl + 'weather?q=' + city + this.apiKey + this.units);
            };
        /**
         * @template T
         * @param {?} url
         * @return {?}
         */
        BaseWeather.prototype.get = /**
         * @template T
         * @param {?} url
         * @return {?}
         */
            function (url) {
                return this.http.get(url);
            };
        /**
         * @template T
         * @param {?} zip
         * @return {?}
         */
        BaseWeather.prototype.getDataByCityZip = /**
         * @template T
         * @param {?} zip
         * @return {?}
         */
            function (zip) {
                return this.get(this.configUrl + 'weather?zip=' + zip + this.apiKey + this.units);
            };
        //  have not finished yet
        //  have not finished yet
        /**
         * @template T
         * @param {?} city
         * @return {?}
         */
        BaseWeather.prototype.getForecastByCityName =
            //  have not finished yet
            /**
             * @template T
             * @param {?} city
             * @return {?}
             */
            function (city) {
                return this.get(this.configUrl + 'forecast/daily?q=' + city + this.apiKey + this.units);
            };
        return BaseWeather;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Forecast = /** @class */ (function () {
        function Forecast(temp, data) {
            this.temp = temp;
            this.data = data;
        }
        return Forecast;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GetDataService = /** @class */ (function (_super) {
        __extends(GetDataService, _super);
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
                return this.getDataByCityName(city).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    _this.mapWeather(res);
                    return _this.currentWeather;
                })), operators.catchError(( /**
                 * @param {?} error
                 * @return {?}
                 */function (error) {
                    _this.errorMessage = '';
                    _this.errorMessage = 'City not found. Please enter city or ZIP correctly';
                    return rxjs.throwError(_this.errorMessage);
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
                return this.getDataByCityZip(zip).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    _this.mapWeather(res);
                    return _this.currentWeather;
                })), operators.catchError(( /**
                 * @param {?} error
                 * @return {?}
                 */function (error) {
                    _this.errorMessage = '';
                    _this.errorMessage = 'City not found. Please enter city or ZIP correctly';
                    return rxjs.throwError(_this.errorMessage);
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
                return this.getForecastByCityName(city).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        GetDataService.ctorParameters = function () {
            return [
                { type: i1.HttpClient }
            ];
        };
        /** @nocollapse */ GetDataService.ngInjectableDef = i0.defineInjectable({ factory: function GetDataService_Factory() { return new GetDataService(i0.inject(i1.HttpClient)); }, token: GetDataService, providedIn: "root" });
        return GetDataService;
    }(BaseWeather));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        WeatherLibService.ctorParameters = function () {
            return [
                { type: GetDataService }
            ];
        };
        /** @nocollapse */ WeatherLibService.ngInjectableDef = i0.defineInjectable({ factory: function WeatherLibService_Factory() { return new WeatherLibService(i0.inject(GetDataService)); }, token: WeatherLibService, providedIn: "root" });
        return WeatherLibService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
                    this.getWeatherDataService.getWeatherByName(this.city).subscribe(( /**
                     * @param {?} value
                     * @return {?}
                     */function (value) {
                        _this.weather = value;
                    }), ( /**
                     * @param {?} error
                     * @return {?}
                     */function (error) {
                        _this.errorMessage = error;
                    }));
                }
                else {
                    this.zip = this.city;
                    this.getWeatherDataService.getWeatherByZip(this.zip).subscribe(( /**
                     * @param {?} value
                     * @return {?}
                     */function (value) {
                        _this.weather = value;
                    }), ( /**
                     * @param {?} error
                     * @return {?}
                     */function (error) {
                        _this.errorMessage = error;
                    }));
                }
                form.reset();
            };
        WeatherLibComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-weather-lib',
                        template: "<nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <h3 class=\"navbar-brand\">Forecast</h3>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\r\n            <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"city\">City / ZIP</label>\r\n                    <div class=\"input-group\">\r\n                        <input id=\"city\" name=\"city\" ngModel class=\"form-control\"\r\n                            placeholder=\"Enter a city or a zip code\" required ngModel>\r\n                        <span class=\"input-group-btn\">\r\n                            <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid\">Search</button>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\" *ngIf=\"errorMessage\">\r\n            <span style=\"color: red\">{{errorMessage}}</span>\r\n        </div>\r\n    </div>\r\n    <hr>\r\n    <div class=\"row\" *ngIf=\"weather && !errorMessage\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n            <p class=\"text-center\"><b>{{weather.name + ', ' + weather.country}}</b>\r\n                <img src=\"http://openweathermap.org/img/w/{{weather.icon}}.png\" alt=\"icon\"></p>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-10 col-md-6\">\r\n            <p class=\"text-center\">{{weather.description |  titlecase}}</p>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-10 col-md-6\">\r\n            <p class=\"text-center\">{{'Temperature: ' +  weather.temp + ' C' }}</p>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-10 col-md-6\">\r\n            <p class=\"text-center\">{{'Max Temperature: ' +  weather.tempMax + ' C'}}</p>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-10 col-md-6\">\r\n            <p class=\"text-center\">{{'Min Temperature: ' +  weather.tempMin + ' C'}}</p>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-10 col-md-6\">\r\n            <p class=\"text-center\">{{'Humidity: ' + weather.humidity + '%'}}</p>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-10 col-md-6\">\r\n            <p class=\"text-center\">{{'Pressure: ' + weather.pressure + ' hPa'}}</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"!errorMessage\">\r\n        <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\r\n            <app-chart [currentCity]=\"city\"></app-chart>\r\n        </div>\r\n    </div>\r\n</div>"
                    }] }
        ];
        /** @nocollapse */
        WeatherLibComponent.ctorParameters = function () {
            return [
                { type: WeatherLibService }
            ];
        };
        return WeatherLibComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var Boost = require('highcharts/modules/boost');
    /** @type {?} */
    var noData = require('highcharts/modules/no-data-to-display');
    /** @type {?} */
    var More = require('highcharts/highcharts-more');
    Boost(Highcharts);
    noData(Highcharts);
    More(Highcharts);
    noData(Highcharts);
    var ChartComponent = /** @class */ (function () {
        function ChartComponent(weatherLibService) {
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
        ChartComponent.prototype.onGetForecast = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.weatherLibService.getForecast(this.currentCity).subscribe(( /**
                 * @param {?} value
                 * @return {?}
                 */function (value) {
                    _this.currentData.splice(0, _this.currentData.length);
                    _this.currentTemp.splice(0, _this.currentTemp.length);
                    for (var i = 0; i < value.length; i++) {
                        _this.currentData.push(value[i].data);
                        _this.currentTemp.push(value[i].temp);
                    }
                    Highcharts.chart('container', _this.chartOptions);
                    _this.showForecast = true;
                }));
            };
        /**
         * @return {?}
         */
        ChartComponent.prototype.onCloseForecast = /**
         * @return {?}
         */
            function () {
                this.showForecast = false;
            };
        /**
         * @return {?}
         */
        ChartComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        ChartComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes['currentCity']) {
                    this.showForecast = false;
                }
            };
        ChartComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-chart',
                        template: "<button class=\"btn btn-primary center-block\" type=\"submit\" (click)=\"onGetForecast()\"\r\n    *ngIf=\"currentCity && !showForecast\">7 day\r\n    forecast</button>\r\n<div id=\"container\" class=\"{{showForecast? '': 'invisible'}}\"></div>\r\n<button class=\"btn btn-primary center-block closeForecastButton\" type=\"button\" *ngIf=\"showForecast\"\r\n    (click)=\"onCloseForecast()\">Close forecast</button>",
                        styles: [".invisible{display:none}.closeForecastButton{margin-top:8px;margin-bottom:8px}"]
                    }] }
        ];
        /** @nocollapse */
        ChartComponent.ctorParameters = function () {
            return [
                { type: WeatherLibService }
            ];
        };
        ChartComponent.propDecorators = {
            currentCity: [{ type: i0.Input }]
        };
        return ChartComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var WeatherLibModule = /** @class */ (function () {
        function WeatherLibModule() {
        }
        WeatherLibModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [WeatherLibComponent, ChartComponent],
                        imports: [
                            platformBrowser.BrowserModule,
                            common.CommonModule,
                            i1.HttpClientModule,
                            forms.FormsModule
                        ],
                        exports: [
                            WeatherLibComponent,
                            platformBrowser.BrowserModule,
                            common.CommonModule,
                            i1.HttpClientModule,
                            forms.FormsModule
                        ]
                    },] }
        ];
        return WeatherLibModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.WeatherLibService = WeatherLibService;
    exports.WeatherLibComponent = WeatherLibComponent;
    exports.WeatherLibModule = WeatherLibModule;
    exports.ɵb = BaseWeather;
    exports.ɵa = GetDataService;
    exports.ɵc = ChartComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=weather-lib.umd.js.map