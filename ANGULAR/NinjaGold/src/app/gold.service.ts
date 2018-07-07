import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class GoldService {
  constructor() { }

  amount: number = 0;

  actions: Array<Object> = [];
  gold$: BehaviorSubject<number> = new BehaviorSubject(this.amount);

  collect(location): BehaviorSubject<number> {
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
    this.actions.push({
      'where': location,
      'amount': this.amount
    })
    this.gold$.next(this.amount)  //needs modification
  }



}
