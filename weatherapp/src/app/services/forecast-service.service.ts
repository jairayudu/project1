import { Injectable } from '@angular/core';
import { EnvironmentInjector } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment1 } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ForecastData } from '../models/weather.model1';
@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  constructor(private http: HttpClient) {}

  getForecastData(cityName: string): Observable<ForecastData> {
    return this.http.get<ForecastData>(
      environment1.WeatherApiBaseurl1 +
        '?city=' +
        cityName +
        ',NC&key' +
        '6456d0b5e8214a6da78fdb7adb82769f',
      {
        headers: new HttpHeaders().set(
          environment1.XRapidAPIKeyHeaderName,
          environment1.XRapidAPIKeyHeaderValue
        ),
      }
    );
  }
}
