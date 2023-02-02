import { Component, OnInit } from '@angular/core';
import { Weather } from './models/weather.model';
import { PostsService } from './services/posts.service';
import { WeatherInfoService } from './services/weather-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private postService: PostsService,
    private weatherService: WeatherInfoService
  ) {}
  title = 'weather-app';
  currentWeather: Weather;
  dataLoaded = false;

  ngOnInit(): void {
    this.weatherService.gotWeather.subscribe((resData) => {
      this.currentWeather = resData;
      this.dataLoaded = true;
    });
    this.weatherService.importWeather();
  }
}
