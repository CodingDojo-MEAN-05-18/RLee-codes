import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../weather-service.service';
import { WeatherReport } from '../weatherReport';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css','../app.component.css']
})
export class DcComponent implements OnInit {

  private location: string = "district of columbia";

  report: WeatherReport;

  currentTemp: number;
  hiTemp: number;
  loTemp: number;
  humidity: number;
  status: string;


  constructor(private weatherService: WeatherServiceService){ }

//probably there were D.R.Y.er ways to manage this... like keeping these varables in the WeatherService or creating a class and passing it up from the WeatherService...
  ngOnInit() {
    this.weatherService.retrieveWeather(this.location)
      .subscribe(data => {
        console.log(data);
        let { main, weather } = data;
        this.currentTemp = this.weatherService.toFarenheit(main.temp);
        this.hiTemp = this.weatherService.toFarenheit(main.temp_max);
        this.loTemp = this.weatherService.toFarenheit(main.temp_min);
        this.humidity = main.humidity;
        this.status = weather[0].description;
//for some reason the new WeatherReport object is not being created even though the associated data is present.  In order to bypass this and move on with classwork, I will use a direct assignment from the component in the view.
        this.report = new WeatherReport(this.currentTemp, this.hiTemp, this.loTemp, this.humidity, this.status)
        console.log(this.currentTemp);
        console.log(this.report);
      }
    )
  }


}
