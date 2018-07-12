import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  base: string = "http://api.openweathermap.org/data/2.5/weather?q="
  key: string = "&appid=646fa32a9923bf81c49a5ab8f813242d"


  report: BehaviorSubject<object> = new BehaviorSubject({})


  constructor(private http: HttpClient) { }

  retrieveWeather(location: string): void{
    this.http.get(this.base + location + this.key).subscribe(
      (data: object) => {
        this.report.next(data)
        console.log('weather retrieved', location);
      }
    )
  }

  toFarenheit(temp): number {
    return Math.floor((9 / 5) * (temp - 273) + 32);
  }

}
