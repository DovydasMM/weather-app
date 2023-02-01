import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  title = 'weather-app';

  API_KEY = `	SQbZMAWU8gzWWL5CCmAMGQ81BgxAQM74`;

  ngOnInit(): void {
    this.http
      .get(
        `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=%09SQbZMAWU8gzWWL5CCmAMGQ81BgxAQM74`
      )
      .subscribe((resData) => console.log(resData));
  }
}
