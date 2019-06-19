import { OnInit, SimpleChange } from '@angular/core';
import * as Highcharts from 'highcharts';
import { WeatherLibService } from '../../weather-lib.service';
export declare class ChartComponent implements OnInit {
    private weatherLibService;
    currentCity: string;
    showForecast: boolean;
    currentData: string[];
    currentTemp: number[];
    highcharts: typeof Highcharts;
    chartOptions: Highcharts.Options;
    constructor(weatherLibService: WeatherLibService);
    onGetForecast(): void;
    onCloseForecast(): void;
    ngOnInit(): void;
    ngOnChanges(changes: {
        [propName: string]: SimpleChange;
    }): void;
}
