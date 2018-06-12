import { Component } from '@angular/core';
import { MonDataService } from './mon-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monsApp';
  constructor(private _httpService: MonDataService) {}

}
