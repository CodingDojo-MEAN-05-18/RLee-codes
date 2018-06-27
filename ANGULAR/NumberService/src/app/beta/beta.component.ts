import { Component, OnInit } from '@angular/core';

import { NumbersService } from '../numbers.service';


@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {

  constructor(private numberService: NumbersService) { }

  betaClick() {
    this.numberService.betaGen();
    console.log("betaClicked", this.numberService.betaArr);
  }


  ngOnInit() {
  }

}
