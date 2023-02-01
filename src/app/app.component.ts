import { Component, OnInit } from '@angular/core';
import { Coords } from './interface/coords';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private postService: PostsService) {}
  title = 'weather-app';

  API_KEY = `	SQbZMAWU8gzWWL5CCmAMGQ81BgxAQM74`;
  coords: Coords;

  ngOnInit(): void {
    this.postService.getLocation().subscribe((resData) => {
      this.coords = {
        latitude: resData['latitude'],
        longitude: resData['longitude'],
      };
      this.postService
        .getWeatherByLocation(this.coords)
        .subscribe((results) => console.log(results));
    });
  }
}
