import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../weather-service.service';



@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {

  private location: string = "seattle";
  weather: object;

  temp: number;

  constructor(private weatherService: WeatherServiceService) {
    this.weatherService.retrieveWeather(this.location);
  }



  ngOnInit() {
    this.weatherService.report.subscribe(data => {
      this.weather = data
    });


  }

}
