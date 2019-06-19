import { OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherLibService } from './weather-lib.service';
import { Weather } from './shared/weather.model';
import { Forecast } from './shared/forecast.model';
export declare class WeatherLibComponent implements OnInit {
    private getWeatherDataService;
    city: any;
    zip: number;
    weather: Weather;
    forecast: Forecast[];
    errorMessage: string;
    constructor(getWeatherDataService: WeatherLibService);
    ngOnInit(): void;
    onSubmit(form: NgForm): void;
}
