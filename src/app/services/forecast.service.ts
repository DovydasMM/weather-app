import { Weather } from './../models/weather.model';
import { Injectable } from '@angular/core';
import { Forecast } from '../models/forecast.model.';

@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  constructor() {}

  getDailyForecast(weatherInfo: Weather) {
    const weekArray: [] = weatherInfo.daily;
    if (weekArray.length >= 8) weekArray.shift();
    let weeklyForecast: Forecast[] = [];
    weekArray.forEach((dayForecast) => {
      let dayTemp = Math.round(dayForecast['temp']['day'] - 273);
      let nightTemp = Math.round(dayForecast['temp']['night'] - 273);
      let time = dayForecast['dt'] * 1000;
      let weather = dayForecast['weather'][0]['main'];
      const dayWeather = new Forecast(dayTemp, nightTemp, time, weather);
      weeklyForecast.push(dayWeather);
    });
    return weeklyForecast;
  }

  getHourlyForecast(weatherInfo: Weather) {
    let hourlyArray: [] = [];
    if (weatherInfo['hourly'].length == 48)
      hourlyArray = weatherInfo['hourly'].splice(0, 24);
    else hourlyArray = weatherInfo['hourly'];
    let hourlyForecast: Forecast[] = [];
    hourlyArray.forEach((forecast) => {
      let temp = Math.round(forecast['temp'] - 273);
      let nonTemp;
      let time = forecast['dt'] * 1000;
      let weather = forecast['weather'][0]['main'];
      const hourForecast = new Forecast(temp, nonTemp, time, weather);
      hourlyForecast.push(hourForecast);
    });
    return hourlyForecast;
  }
}
