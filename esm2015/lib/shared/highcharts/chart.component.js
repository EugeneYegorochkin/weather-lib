/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import { WeatherLibService } from '../../weather-lib.service';
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
export class ChartComponent {
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
            Highcharts.chart('container', this.chartOptions);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vd2VhdGhlci1saWIvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2hpZ2hjaGFydHMvY2hhcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBMEMsTUFBTSxlQUFlLENBQUM7QUFDakcsT0FBTyxLQUFLLFVBQVUsTUFBTSxZQUFZLENBQUM7QUFDekMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0lBRzFELEtBQUssR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUM7O0lBQzNDLE1BQU0sR0FBRyxPQUFPLENBQUMsdUNBQXVDLENBQUM7O0lBQ3pELElBQUksR0FBRyxPQUFPLENBQUMsNEJBQTRCLENBQUM7QUFFaEQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2xCLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDakIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBT25CLE1BQU0sT0FBTyxjQUFjOzs7O0lBK0J2QixZQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQTdCakQsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsZ0JBQVcsR0FBYSxFQUFFLENBQUM7UUFDM0IsZ0JBQVcsR0FBYSxFQUFFLENBQUM7UUFDM0IsZUFBVSxHQUFHLFVBQVUsQ0FBQztRQUV4QixpQkFBWSxHQUF1QjtZQUN0QyxLQUFLLEVBQUU7Z0JBQ0gsSUFBSSxFQUFFLFVBQVU7YUFDbkI7WUFDRCxLQUFLLEVBQUU7Z0JBQ0gsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXO2FBQy9CO1lBQ0QsS0FBSyxFQUFFO2dCQUNILEtBQUssRUFBRTtvQkFDSCxJQUFJLEVBQUUsZ0JBQWdCO2lCQUN6QjthQUNKO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLFdBQVcsRUFBRSxLQUFLO2FBQ3JCO1lBQ0QsTUFBTSxFQUFFO2dCQUNKO29CQUNJLElBQUksRUFBRSxNQUFNO29CQUNaLElBQUksRUFBRSxRQUFRO29CQUNkLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVztpQkFDekI7YUFDSjtTQUNKLENBQUM7SUFHRixDQUFDOzs7O0lBRUQsYUFBYTtRQUNULElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ3JFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN4QztZQUNELFVBQVUsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUM3QixDQUFDLEVBQ0EsQ0FBQztJQUNOLENBQUM7Ozs7SUFFTSxlQUFlO1FBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7Ozs7SUFFTSxXQUFXLENBQUMsT0FBNkM7UUFDNUQsSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7U0FDN0I7SUFDTCxDQUFDOzs7WUFoRUosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxXQUFXO2dCQUNyQix5YUFBcUM7O2FBRXhDOzs7O1lBaEJRLGlCQUFpQjs7OzBCQWtCckIsS0FBSzs7OztJQUFOLHFDQUE2Qjs7SUFDN0Isc0NBQTRCOztJQUM1QixxQ0FBa0M7O0lBQ2xDLHFDQUFrQzs7SUFDbEMsb0NBQStCOztJQUUvQixzQ0FzQkU7Ozs7O0lBRVUsMkNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIFNpbXBsZUNoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBIaWdoY2hhcnRzIGZyb20gJ2hpZ2hjaGFydHMnO1xyXG5pbXBvcnQgeyBXZWF0aGVyTGliU2VydmljZSB9IGZyb20gJy4uLy4uL3dlYXRoZXItbGliLnNlcnZpY2UnO1xyXG5cclxuZGVjbGFyZSB2YXIgcmVxdWlyZTogYW55O1xyXG5sZXQgQm9vc3QgPSByZXF1aXJlKCdoaWdoY2hhcnRzL21vZHVsZXMvYm9vc3QnKTtcclxubGV0IG5vRGF0YSA9IHJlcXVpcmUoJ2hpZ2hjaGFydHMvbW9kdWxlcy9uby1kYXRhLXRvLWRpc3BsYXknKTtcclxubGV0IE1vcmUgPSByZXF1aXJlKCdoaWdoY2hhcnRzL2hpZ2hjaGFydHMtbW9yZScpO1xyXG5cclxuQm9vc3QoSGlnaGNoYXJ0cyk7XHJcbm5vRGF0YShIaWdoY2hhcnRzKTtcclxuTW9yZShIaWdoY2hhcnRzKTtcclxubm9EYXRhKEhpZ2hjaGFydHMpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1jaGFydCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY2hhcnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY2hhcnQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBASW5wdXQoKSBjdXJyZW50Q2l0eTogc3RyaW5nO1xyXG4gICAgcHVibGljIHNob3dGb3JlY2FzdCA9IGZhbHNlO1xyXG4gICAgcHVibGljIGN1cnJlbnREYXRhOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHVibGljIGN1cnJlbnRUZW1wOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgcHVibGljIGhpZ2hjaGFydHMgPSBIaWdoY2hhcnRzO1xyXG5cclxuICAgIHB1YmxpYyBjaGFydE9wdGlvbnM6IEhpZ2hjaGFydHMuT3B0aW9ucyA9IHtcclxuICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICB0ZXh0OiAnRm9yZWNhc3QnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB4QXhpczoge1xyXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiB0aGlzLmN1cnJlbnREYXRhXHJcbiAgICAgICAgfSxcclxuICAgICAgICB5QXhpczoge1xyXG4gICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1RlbXBlcmF0dXJlIMKwQydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgICB2YWx1ZVN1ZmZpeDogJyDCsEMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXJpZXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1RlbXAnLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2NvbHVtbicsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLmN1cnJlbnRUZW1wXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgd2VhdGhlckxpYlNlcnZpY2U6IFdlYXRoZXJMaWJTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgb25HZXRGb3JlY2FzdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLndlYXRoZXJMaWJTZXJ2aWNlLmdldEZvcmVjYXN0KHRoaXMuY3VycmVudENpdHkpLnN1YnNjcmliZSgodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RGF0YS5zcGxpY2UoMCwgdGhpcy5jdXJyZW50RGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUZW1wLnNwbGljZSgwLCB0aGlzLmN1cnJlbnRUZW1wLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudERhdGEucHVzaCh2YWx1ZVtpXS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRlbXAucHVzaCh2YWx1ZVtpXS50ZW1wKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBIaWdoY2hhcnRzLmNoYXJ0KCdjb250YWluZXInLCB0aGlzLmNoYXJ0T3B0aW9ucyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0ZvcmVjYXN0ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25DbG9zZUZvcmVjYXN0KCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0ZvcmVjYXN0ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3Byb3BOYW1lOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSkge1xyXG4gICAgICAgIGlmIChjaGFuZ2VzWydjdXJyZW50Q2l0eSddKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0ZvcmVjYXN0ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=