import { Forecast } from './../models/forecast.model.';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ForecastService } from '../services/forecast.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss'],
})
export class WeatherForecastComponent implements OnInit {
  constructor(private forecastService: ForecastService) {}
  @Input() weatherInfo;

  forecastArray: Forecast[] = [];
  isDaily = true;

  onDaily() {
    this.isDaily = true;
    this.forecastArray = this.forecastService.getDailyForecast(
      this.weatherInfo
    );
  }

  onHourly() {
    this.isDaily = false;
    this.forecastArray = this.forecastService.getHourlyForecast(
      this.weatherInfo
    );
  }

  ngOnInit(): void {
    this.forecastArray = this.forecastService.getDailyForecast(
      this.weatherInfo
    );
  }
}
