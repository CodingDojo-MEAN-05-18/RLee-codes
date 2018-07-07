import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';

import { GoldService } from '../gold.service';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  @Output() goldEvent: EventEmitter<number> = new EventEmitter();

  gold: number = 0;

  OnClick(location) {
    console.log(location, "clicked");
    this.goldService.collect(location);
    // this.gold += this.goldService.amount;
    console.log(this.gold, this.goldService.amount);
    // this.goldEvent.emit(this.gold);
  }

  constructor(private goldService: GoldService) { }

  ngOnInit() {
    this.goldService.gold$
      .subscribe(
        data => console.log(data)//this.gold += gold;
    );
  }





}
