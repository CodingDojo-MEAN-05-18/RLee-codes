import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  numbers: number[] = [1, 2, 3];

  retrieveNumbers(): number[] {
    return this.numbers;
  }

  addNumber(num: number) {
    this.numbers.push(num);
  }

  constructor() { }
}
