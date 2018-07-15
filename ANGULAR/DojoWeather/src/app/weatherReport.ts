import { componentFactoryName } from "@angular/compiler";

export class WeatherReport {

  currentTemp: number;
  hiTemp: number;
  loTemp: number;
  humidity: number;
  status: number;
  
  constructor(
    currentTemp: number,
    hiTemp: number,
    loTemp: number,
    humidity: number,
    status: string
  ) { }
}
