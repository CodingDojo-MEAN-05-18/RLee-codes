import { Component, OnInit } from '@angular/core';

import { NumbersService } from '../numbers.service';

@Component({
  selector: 'app-gamma',
  templateUrl: './gamma.component.html',
  styleUrls: ['./gamma.component.css']
})
export class GammaComponent implements OnInit {

  constructor(private numberService: NumbersService) { }

  ngOnInit() {
  }

}
