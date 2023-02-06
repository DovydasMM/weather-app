import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainWeatherComponent } from './main-weather/main-weather.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, MainWeatherComponent, WeatherForecastComponent],
  imports: [BrowserModule, HttpClientModule, FontAwesomeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
