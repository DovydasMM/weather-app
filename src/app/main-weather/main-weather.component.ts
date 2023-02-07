import { Component, OnInit, ViewChild } from '@angular/core';
import { Weather } from '../models/weather.model';
import { WeatherInfoService } from '../services/weather-info.service';
import {
  faCloud,
  faSnowflake,
  faTemperatureHalf,
  faHouseFloodWater,
  faWind,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-main-weather',
  templateUrl: './main-weather.component.html',
  styleUrls: ['./main-weather.component.scss'],
})
export class MainWeatherComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;

  currentWeather: Weather;

  gotWeather = false;
  iconCloud = faCloud;
  iconSnow = faSnowflake;
  iconThermometer = faTemperatureHalf;
  iconHumid = faHouseFloodWater;
  iconWind = faWind;
  iconGlass = faMagnifyingGlass;
  errorMessage: string;

  constructor(
    private weatherService: WeatherInfoService,
    private postService: PostsService
  ) {}

  ngOnInit(): void {
    this.weatherService.gotWeather.subscribe((weatherData) => {
      this.currentWeather = weatherData;
      this.gotWeather = true;
      this.errorMessage = '';
    });
    this.weatherService.error.subscribe((resData) => {
      this.errorMessage = resData;
    });
  }

  onSubmit() {
    let city = this.signupForm.value.cityName;
    if (city == '' || city == null) {
      this.weatherService.importWeather();
      return;
    }
    this.weatherService.getWeatherByCity(city);
    this.signupForm.reset();
  }
}
