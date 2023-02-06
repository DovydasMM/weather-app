import { WeatherInfoService } from './../services/weather-info.service';
import { Forecast } from './../models/forecast.model.';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Input } from '@angular/core';
import { ForecastService } from '../services/forecast.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss'],
})
export class WeatherForecastComponent implements OnInit {
  constructor(
    private forecastService: ForecastService,
    private weatherInfoService: WeatherInfoService
  ) {}
  @Input() weatherInfo;
  forecastArray: Forecast[] = [];
  isDaily = true;
  activeListPart = 0;

  onDaily() {
    this.resetForecast();
    this.forecastArray = this.forecastService.getDailyForecast(
      this.weatherInfo
    );
  }

  onHourly(listPart: number) {
    this.isDaily = false;
    this.activeListPart = listPart;
    this.forecastArray = this.forecastService.getHourlyForecast(
      this.weatherInfo,
      listPart
    );
  }

  ngOnInit(): void {
    this.forecastArray = this.forecastService.getDailyForecast(
      this.weatherInfo
    );
    this.weatherInfoService.gotWeather.subscribe((newCity) => {
      this.resetForecast();
      this.forecastArray = this.forecastService.getDailyForecast(newCity);
    });
  }

  resetForecast() {
    this.isDaily = true;
    this.activeListPart = 0;
  }
}
