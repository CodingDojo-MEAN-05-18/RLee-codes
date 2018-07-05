import { Component } from '@angular/core';

import { GoldService } from './gold.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NinjaGold';

  public money: number = 0;

  constructor(private goldService: GoldService) { }

  public setMoney(money) {

    console.log('setMoney Triggered', money);
    this.money = money;
  }
}

