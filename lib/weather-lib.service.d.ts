import { GetDataService } from './shared/get-data-service';
import { Weather } from './shared/weather.model';
import { Observable } from 'rxjs';
import { Forecast } from './shared/forecast.model';
export declare class WeatherLibService {
    private getDataService;
    constructor(getDataService: GetDataService);
    getWeatherByName(city: string): Observable<Weather>;
    getWeatherByZip(zip: number): Observable<Weather>;
    getForecast(city: string): Observable<Forecast[]>;
}
