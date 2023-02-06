import { Weather } from './../models/weather.model';
import { Injectable } from '@angular/core';
import { Forecast } from '../models/forecast.model.';
import { IconServicesService } from './icon-services.service';

@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  constructor(private iconService: IconServicesService) {}

  getDailyForecast(weatherInfo: Weather) {
    const weekArray: [] = weatherInfo.daily;
    if (weekArray.length >= 8) weekArray.shift();
    let weeklyForecast: Forecast[] = [];
    weekArray.forEach((dayForecast) => {
      let dayTemp = Math.round(dayForecast['temp']['day'] - 273);
      let nightTemp = Math.round(dayForecast['temp']['night'] - 273);
      let time = dayForecast['dt'] * 1000;
      let weather = dayForecast['weather'][0]['main'];
      let icon = this.iconService.getIcon(weather);
      const dayWeather = new Forecast(dayTemp, nightTemp, time, weather, icon);
      weeklyForecast.push(dayWeather);
    });
    return weeklyForecast;
  }

  getHourlyForecast(weatherInfo: Weather, listPart: number) {
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
      let icon = this.iconService.getIcon(weather);
      const hourForecast = new Forecast(temp, nonTemp, time, weather, icon);
      hourlyForecast.push(hourForecast);
    });
    let listStart = listPart * 8;
    let listEnd = 8 + listPart * 8;
    let forecastPart = hourlyForecast.slice(listStart, listEnd);
    return forecastPart;
  }
}
