import { Injectable } from '@angular/core';
import { Coords } from '../interface/coords';
import { PostsService } from './posts.service';
import { Weather } from '../models/weather.model';
import { Subject } from 'rxjs';
import { IconServicesService } from './icon-services.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherInfoService {
  constructor(
    private postService: PostsService,
    private iconService: IconServicesService
  ) {}

  gotWeather = new Subject<Weather>();
  coords: Coords;
  currentWeather: Weather;

  importWeather() {
    this.postService.getLocation().subscribe((locationData) => {
      this.coords = {
        latitude: locationData['latitude'],
        longitude: locationData['longitude'],
      };
      this.postService
        .getWeatherByLocation(this.coords)
        .subscribe((weatherData) => {
          let cityName = locationData['city'];
          let tempFeel = Math.round(weatherData['current']['feels_like'] - 273);
          let currentTemp = Math.round(weatherData['current']['temp'] - 273);
          let cloudLevel = weatherData['current']['clouds'];
          let humidity = weatherData['current']['humidity'];
          let windSpeed = Math.round(
            weatherData['current']['wind_speed'] * 3.6
          );
          let weather = weatherData['current']['weather'][0]['main'];
          let weatherIcon = this.iconService.getIcon(weather);
          let currentTime = weatherData['current']['dt'];
          let daily = weatherData['daily'];
          let hourly = weatherData['hourly'];
          this.currentWeather = new Weather(
            cityName,
            tempFeel,
            currentTemp,
            cloudLevel,
            humidity,
            windSpeed,
            weather,
            weatherIcon,
            currentTime * 1000,
            daily,
            hourly
          );
          this.gotWeather.next(this.currentWeather);
        });
    });
  }

  getWeather() {
    return this.currentWeather;
  }
}
