import { Component, OnInit } from '@angular/core';

import { NumbersService } from '../numbers.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css', '../app.component.css']
})
export class AlphaComponent implements OnInit {

  constructor(private numberService: NumbersService) { }

  alphaClick() {
    this.numberService.alphaGen()
    console.log('alphaClicked', this.numberService.alphaArr);
    return this.numberService.alphaArr;
  }

  ngOnInit() {
  }

}
