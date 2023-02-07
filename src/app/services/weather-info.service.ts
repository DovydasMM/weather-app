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
  error = new Subject<string>();
  coords: Coords;
  currentWeather: Weather;

  importWeather() {
    this.postService.getLocation().subscribe((locationData) => {
      this.coords = {
        latitude: locationData['latitude'],
        longitude: locationData['longitude'],
      };
      this.postService
        .getWeatherByLocation(this.coords, locationData['city'])
        .subscribe((weatherData) => {
          this.gotWeather.next(weatherData);
        });
    });
  }

  getWeather() {
    return this.currentWeather;
  }

  getWeatherByCity(cityName: string) {
    this.postService.getCityCoords(cityName).subscribe(
      (cityCoords) => {
        console.log(cityCoords);
        this.postService
          .getWeatherByLocation(cityCoords.coordinates, cityCoords.city)
          .subscribe((weatherData) => this.gotWeather.next(weatherData));
      },
      (error) => {
        this.error.next(error.message);
      }
    );
  }
}
