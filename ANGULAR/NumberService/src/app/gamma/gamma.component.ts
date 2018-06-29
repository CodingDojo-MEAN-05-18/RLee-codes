import { Component, OnInit } from '@angular/core';

import { NumbersService } from '../numbers.service';

@Component({
  selector: 'app-gamma',
  templateUrl: './gamma.component.html',
  styleUrls: ['./gamma.component.css', '../app.component.css']
})
export class GammaComponent implements OnInit {



  gammaCall() {
    this.numberService.gammaGen();
    console.log("gamma clicked", this.numberService.gamma);
  }

  constructor(private numberService: NumbersService) { }

  ngOnInit() {}

}
