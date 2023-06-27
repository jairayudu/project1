import { EnvironmentInjector, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment, environment1 } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';
import { ForecastData } from '../models/weather.model1';
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}
  getLocation() {
    return this.http.get('https://ipapi.co/json/');
  }
  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(
      environment.WeatherApiBaseurl + '/city/' + cityName,
      {
        headers: new HttpHeaders()
          .set(
            environment.XRapidAPIHostHeaderName,
            environment.XRapidAPIHostHeaderValue
          )
          .set(
            environment.XRapidAPIKeyHeaderName,
            environment.XRapidAPIKeyHeaderValue
          ),
      }
    );
  }
}
