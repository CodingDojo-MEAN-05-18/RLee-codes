import { componentFactoryName } from "@angular/compiler";

export class WeatherReport {

  constructor(
    currentTemp: number,
    hiTemp: number,
    loTemp: number,
    humidity: number,
    status: string
  ) { }
}
//thought I wwould be needing this at one point, but ran into issues getting this to work as a part of a solution
// including the observable that am using to stream weather data to the city components
