import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  base: string = "http://api.openweathermap.org/data/2.5/weather?q="
  city: string
  key: string = "&appid=646fa32a9923bf81c49a5ab8f813242d"

  weatherReport: object ={} //build a class in a separate TS file for this.  Send this out with the observable instead of the raw data from the get request.

  report: BehaviorSubject<object> = new BehaviorSubject({})


  constructor(private http: HttpClient) { }

  retrieveWeather(location: string): Observable<object>{
    this.http.get(this.base + location + this.key).subscribe(
      (data: object) => {this.report.next(data)}
    )
    console.log('weather retrieved', location);
  }

}
