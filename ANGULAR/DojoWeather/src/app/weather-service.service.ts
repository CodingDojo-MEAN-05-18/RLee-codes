import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  base: string = "http://api.openweathermap.org/data/2.5/weather?q="
  key: string = "&appid=646fa32a9923bf81c49a5ab8f813242d"

  constructor(private http: HttpClient) { }

  retrieveWeather(location: string): Observable<any> {
    let data = this.http.get<any>(this.base + location + this.key);
    console.log(`called for ${location} weather`, data);
  // the get was captured into the data variable so that I could console.log it before returning
    return data;
  }

  toFarenheit(temp): number {
    return Math.floor((9 / 5) * (temp - 273) + 32);
  }

}
