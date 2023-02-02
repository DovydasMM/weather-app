import { Component, OnInit } from '@angular/core';
import { Weather } from '../models/weather.model';
import { WeatherInfoService } from '../services/weather-info.service';
import {
  faCloud,
  faSnowflake,
  faTemperatureHalf,
  faHouseFloodWater,
  faWind,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-weather',
  templateUrl: './main-weather.component.html',
  styleUrls: ['./main-weather.component.scss'],
})
export class MainWeatherComponent implements OnInit {
  currentWeather: Weather;
  gotWeather = false;
  iconCloud = faCloud;
  iconSnow = faSnowflake;
  iconThermometer = faTemperatureHalf;
  iconHumid = faHouseFloodWater;
  iconWind = faWind;

  constructor(private weatherService: WeatherInfoService) {}
  ngOnInit(): void {
    this.weatherService.gotWeather.subscribe((weatherData) => {
      this.currentWeather = weatherData;
      this.gotWeather = true;
    });
  }
}
