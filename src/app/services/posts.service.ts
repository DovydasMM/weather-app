import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coords } from '../interface/coords';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getLocation() {
    return this.http.get(
      `https://ipgeolocation.abstractapi.com/v1/?api_key=5b305c2c0ff841adb70033db1fd316d1`
    );
  }

  getWeatherByLocation(coordinates: Coords) {
    return this.http.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&hourly=temperature_2m`
    );
  }
}
