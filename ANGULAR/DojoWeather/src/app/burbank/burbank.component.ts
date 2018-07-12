import { Component, OnInit, OnChanges } from '@angular/core';
import { WeatherServiceService } from '../weather-service.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css','../app.component.css']
})
export class BurbankComponent implements OnInit, OnChanges {

  private location: string = "burbank";

  report: object;

  currentTemp: number;
  hiTemp: number;
  loTemp: number;
  humidity: number;
  status: string;


  constructor(private weatherService: WeatherServiceService) {
    this.weatherService.retrieveWeather(this.location);
  }


//probably there were D.R.Y.er ways to manage this... like keeping these varables in the WeatherService or creating a class and passing it up from the WeatherService, but my goal in using this method was to practice with Observables.
  ngOnInit() {
    this.weatherService.report.subscribe(data => {
      this.report = data;
      this.currentTemp = this.weatherService.toFarenheit(this.report.main.temp);
      this.hiTemp = this.weatherService.toFarenheit(this.report.main.temp_max);
      this.loTemp = this.weatherService.toFarenheit(this.report.main.temp_min);
      this.humidity = this.report.main.humidity;
      this.status = this.report.weather[0].description;
    });
    //also worth noting that tslint does Not like my accessing properties that aren't explicitly described on the object, this.report.
  }


}
