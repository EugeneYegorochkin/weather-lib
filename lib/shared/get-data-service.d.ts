import { HttpClient } from '@angular/common/http';
import { Weather } from './weather.model';
import { BaseWeather } from './base-weather.service';
import { Forecast } from './forecast.model';
import { Observable } from 'rxjs';
export declare class GetDataService extends BaseWeather {
    private currentWeather;
    private currentForecast;
    private months;
    errorMessage: string;
    constructor(http: HttpClient);
    getDataByName(city: string): Observable<Weather>;
    getDataByZip(zip: number): Observable<Weather>;
    getForecastByName(city: string): Observable<Forecast[]>;
    private mapWeather;
}
