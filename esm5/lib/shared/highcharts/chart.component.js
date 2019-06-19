/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import { WeatherLibService } from '../../weather-lib.service';
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
        this.weatherLibService.getForecast(this.currentCity).subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
        { type: Component, args: [{
                    selector: 'app-chart',
                    template: "<button class=\"btn btn-primary center-block\" type=\"submit\" (click)=\"onGetForecast()\"\r\n    *ngIf=\"currentCity && !showForecast\">7 day\r\n    forecast</button>\r\n<div id=\"container\" class=\"{{showForecast? '': 'invisible'}}\"></div>\r\n<button class=\"btn btn-primary center-block closeForecastButton\" type=\"button\" *ngIf=\"showForecast\"\r\n    (click)=\"onCloseForecast()\">Close forecast</button>",
                    styles: [".invisible{display:none}.closeForecastButton{margin-top:8px;margin-bottom:8px}"]
                }] }
    ];
    /** @nocollapse */
    ChartComponent.ctorParameters = function () { return [
        { type: WeatherLibService }
    ]; };
    ChartComponent.propDecorators = {
        currentCity: [{ type: Input }]
    };
    return ChartComponent;
}());
export { ChartComponent };
if (false) {
    /** @type {?} */
    ChartComponent.prototype.currentCity;
    /** @type {?} */
    ChartComponent.prototype.showForecast;
    /** @type {?} */
    ChartComponent.prototype.currentData;
    /** @type {?} */
    ChartComponent.prototype.currentTemp;
    /** @type {?} */
    ChartComponent.prototype.highcharts;
    /** @type {?} */
    ChartComponent.prototype.chartOptions;
    /**
     * @type {?}
     * @private
     */
    ChartComponent.prototype.weatherLibService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vd2VhdGhlci1saWIvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2hpZ2hjaGFydHMvY2hhcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBMEMsTUFBTSxlQUFlLENBQUM7QUFDakcsT0FBTyxLQUFLLFVBQVUsTUFBTSxZQUFZLENBQUM7QUFDekMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0lBRzFELEtBQUssR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUM7O0lBQzNDLE1BQU0sR0FBRyxPQUFPLENBQUMsdUNBQXVDLENBQUM7O0lBQ3pELElBQUksR0FBRyxPQUFPLENBQUMsNEJBQTRCLENBQUM7QUFFaEQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2xCLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDakIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRW5CO0lBb0NJLHdCQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQTdCakQsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsZ0JBQVcsR0FBYSxFQUFFLENBQUM7UUFDM0IsZ0JBQVcsR0FBYSxFQUFFLENBQUM7UUFDM0IsZUFBVSxHQUFHLFVBQVUsQ0FBQztRQUV4QixpQkFBWSxHQUF1QjtZQUN0QyxLQUFLLEVBQUU7Z0JBQ0gsSUFBSSxFQUFFLFVBQVU7YUFDbkI7WUFDRCxLQUFLLEVBQUU7Z0JBQ0gsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXO2FBQy9CO1lBQ0QsS0FBSyxFQUFFO2dCQUNILEtBQUssRUFBRTtvQkFDSCxJQUFJLEVBQUUsZ0JBQWdCO2lCQUN6QjthQUNKO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLFdBQVcsRUFBRSxLQUFLO2FBQ3JCO1lBQ0QsTUFBTSxFQUFFO2dCQUNKO29CQUNJLElBQUksRUFBRSxNQUFNO29CQUNaLElBQUksRUFBRSxRQUFRO29CQUNkLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVztpQkFDekI7YUFDSjtTQUNKLENBQUM7SUFHRixDQUFDOzs7O0lBRUQsc0NBQWE7OztJQUFiO1FBQUEsaUJBWUM7UUFYRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxLQUFLO1lBQ2pFLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNuQyxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3JDLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN4QztZQUNELFVBQVUsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNqRCxLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUM3QixDQUFDLEVBQ0EsQ0FBQztJQUNOLENBQUM7Ozs7SUFFTSx3Q0FBZTs7O0lBQXRCO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELGlDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7O0lBRU0sb0NBQVc7Ozs7SUFBbEIsVUFBbUIsT0FBNkM7UUFDNUQsSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7U0FDN0I7SUFDTCxDQUFDOztnQkFoRUosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxXQUFXO29CQUNyQix5YUFBcUM7O2lCQUV4Qzs7OztnQkFoQlEsaUJBQWlCOzs7OEJBa0JyQixLQUFLOztJQTREVixxQkFBQztDQUFBLEFBbEVELElBa0VDO1NBN0RZLGNBQWM7OztJQUN2QixxQ0FBNkI7O0lBQzdCLHNDQUE0Qjs7SUFDNUIscUNBQWtDOztJQUNsQyxxQ0FBa0M7O0lBQ2xDLG9DQUErQjs7SUFFL0Isc0NBc0JFOzs7OztJQUVVLDJDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBTaW1wbGVDaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgSGlnaGNoYXJ0cyBmcm9tICdoaWdoY2hhcnRzJztcclxuaW1wb3J0IHsgV2VhdGhlckxpYlNlcnZpY2UgfSBmcm9tICcuLi8uLi93ZWF0aGVyLWxpYi5zZXJ2aWNlJztcclxuXHJcbmRlY2xhcmUgdmFyIHJlcXVpcmU6IGFueTtcclxubGV0IEJvb3N0ID0gcmVxdWlyZSgnaGlnaGNoYXJ0cy9tb2R1bGVzL2Jvb3N0Jyk7XHJcbmxldCBub0RhdGEgPSByZXF1aXJlKCdoaWdoY2hhcnRzL21vZHVsZXMvbm8tZGF0YS10by1kaXNwbGF5Jyk7XHJcbmxldCBNb3JlID0gcmVxdWlyZSgnaGlnaGNoYXJ0cy9oaWdoY2hhcnRzLW1vcmUnKTtcclxuXHJcbkJvb3N0KEhpZ2hjaGFydHMpO1xyXG5ub0RhdGEoSGlnaGNoYXJ0cyk7XHJcbk1vcmUoSGlnaGNoYXJ0cyk7XHJcbm5vRGF0YShIaWdoY2hhcnRzKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtY2hhcnQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NoYXJ0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2NoYXJ0LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQElucHV0KCkgY3VycmVudENpdHk6IHN0cmluZztcclxuICAgIHB1YmxpYyBzaG93Rm9yZWNhc3QgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBjdXJyZW50RGF0YTogc3RyaW5nW10gPSBbXTtcclxuICAgIHB1YmxpYyBjdXJyZW50VGVtcDogbnVtYmVyW10gPSBbXTtcclxuICAgIHB1YmxpYyBoaWdoY2hhcnRzID0gSGlnaGNoYXJ0cztcclxuXHJcbiAgICBwdWJsaWMgY2hhcnRPcHRpb25zOiBIaWdoY2hhcnRzLk9wdGlvbnMgPSB7XHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgdGV4dDogJ0ZvcmVjYXN0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeEF4aXM6IHtcclxuICAgICAgICAgICAgY2F0ZWdvcmllczogdGhpcy5jdXJyZW50RGF0YVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeUF4aXM6IHtcclxuICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdUZW1wZXJhdHVyZSDCsEMnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgICAgdmFsdWVTdWZmaXg6ICcgwrBDJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VyaWVzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdUZW1wJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogdGhpcy5jdXJyZW50VGVtcFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdlYXRoZXJMaWJTZXJ2aWNlOiBXZWF0aGVyTGliU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIG9uR2V0Rm9yZWNhc3QoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy53ZWF0aGVyTGliU2VydmljZS5nZXRGb3JlY2FzdCh0aGlzLmN1cnJlbnRDaXR5KS5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERhdGEuc3BsaWNlKDAsIHRoaXMuY3VycmVudERhdGEubGVuZ3RoKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGVtcC5zcGxpY2UoMCwgdGhpcy5jdXJyZW50VGVtcC5sZW5ndGgpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnREYXRhLnB1c2godmFsdWVbaV0uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUZW1wLnB1c2godmFsdWVbaV0udGVtcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgSGlnaGNoYXJ0cy5jaGFydCgnY29udGFpbmVyJywgdGhpcy5jaGFydE9wdGlvbnMpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dGb3JlY2FzdCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQ2xvc2VGb3JlY2FzdCgpIHtcclxuICAgICAgICB0aGlzLnNob3dGb3JlY2FzdCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wTmFtZTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlIH0pIHtcclxuICAgICAgICBpZiAoY2hhbmdlc1snY3VycmVudENpdHknXSkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dGb3JlY2FzdCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19