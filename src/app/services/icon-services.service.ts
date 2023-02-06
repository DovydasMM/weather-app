import { Injectable } from '@angular/core';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faCloud, faSnowflake, faSun } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root',
})
export class IconServicesService {
  constructor() {}

  getIcon(weatherType: string) {
    switch (weatherType) {
      case 'Clouds':
        return faCloud;
        break;
      case 'Snow':
        return faSnowflake;
        break;
      case 'Clear':
        return faSun;
        break;
      default:
        return faSun;
    }
  }
}
