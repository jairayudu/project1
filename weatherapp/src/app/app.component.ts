import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';
import { environment1 } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ForecastData } from './models/weather.model1';
import { ForecastService } from './services/forecast-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'weatherapp';
  constructor(
    public weatherService: WeatherService,
    public forecastService: ForecastService
  ) {}
  cityName: string = 'Hyderabad';
  weatherData?: WeatherData;
  forecastData?: ForecastData;
  latitude: any;
  longitude: any;
  location: any;
  ngOnInit(): void {
    this.weatherService.getLocation().subscribe((response) => {
      console.log(response);
      this.location = response;
      this.getWeatherData(this.cityName);
    });
  }
  onSubmit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }
  public getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe((response) => {
      debugger;
      this.weatherData = response;
      this.latitude = response.coord.lat;
      this.longitude = response.coord.lon;
      this.getForecastData(cityName);
      console.log(response);
    });
  }

  public getForecastData(cityName: string) {
    this.forecastService.getForecastData(cityName).subscribe((response2) => {
      this.forecastData = response2;
      console.log(cityName);
    });
  }
}
