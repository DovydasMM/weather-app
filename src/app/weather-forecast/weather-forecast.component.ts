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

  ngOnInit(): void {
    this.forecastService.getDailyForecast(this.weatherInfo);
  }
}
