import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coords } from '../interface/coords';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}
  private API_KEY = `20f7632ffc2c022654e4093c6947b4f4`;

  getLocation() {
    return this.http.get(
      `https://ipgeolocation.abstractapi.com/v1/?api_key=5b305c2c0ff841adb70033db1fd316d1`
    );
  }

  getWeatherByLocation(coordinates: Coords) {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.latitude}&lon=${coordinates.longitude}&exclude={minutely}&appid=20f7632ffc2c022654e4093c6947b4f4`
    );
  }
}
