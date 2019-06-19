import { Observable } from 'rxjs';
export interface IWatherService {
    apiKey: string;
    configUrl: string;
    getDataByCityName<T>(city: string): Observable<T>;
    getDataByCityZip<T>(zip: number): Observable<T>;
    getForecastByCityName<T>(city: string): Observable<T>;
}
