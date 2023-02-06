import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coords } from '../interface/coords';
import { map } from 'rxjs';

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

  getCityCoords(cityName: string) {
    return this.http
      .get(
        `https://api.opencagedata.com/geocode/v1/json?q=${cityName}&key=3b2d4b78bd464b36821b12366c71bab3&pretty=1&abbrv=1&limit=1`
      )
      .pipe(
        map((resData) => {
          let coordinates: Coords = {
            latitude: resData['results'][0]['geometry']['lat'],
            longitude: resData['results'][0]['geometry']['lng'],
          };
          return coordinates;
        })
      );
  }
}
