import { Injectable } from '@angular/core';
import { Weather } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  constructor() {}

  getDailyForecast(weatherInfo: Weather) {
    let weekArray: [] = weatherInfo.daily;
    weekArray.shift();
    weekArray.forEach((day) => console.log(day['dt']));
  }

  getHourlyForecast(weatherInfo: Weather) {}
}
