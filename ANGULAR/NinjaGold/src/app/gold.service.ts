import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoldService {

  constructor() { }

  actions: Array<Object> = [];
  gold: number = 0;
  amount: number;

  collect(location): void {
    if (location == 'house') {
      this.amount = Math.floor(Math.random() * 8) + 7
    } else if (location == 'farm') {
      this.amount = Math.floor(Math.random() * 3) + 2
    } else if (location == 'cave') {
      this.amount = Math.floor(Math.random() * 5) + 5
    } else if (location == 'casino'){
      this.amount = Math.floor(Math.random() * 100)
      let type = Math.floor(Math.random() * 2)
      if (type % 2 == 1){
        this.amount *= -1;
      }
    }
    this.gold += this.amount;
    this.actions.push({
      'where': location,
      'amount': this.amount
    })

  }



}
