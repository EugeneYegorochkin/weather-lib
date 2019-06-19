import { IWatherService } from './weather.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
export declare abstract class BaseWeather implements IWatherService {
    private key;
    private http;
    apiKey: string;
    configUrl: string;
    units: string;
    constructor(key: string, http: HttpClient);
    getDataByCityName<T>(city: string): Observable<T>;
    get<T>(url: string): Observable<T>;
    getDataByCityZip<T>(zip: number): Observable<T>;
    getForecastByCityName<T>(city: string): Observable<T>;
}
