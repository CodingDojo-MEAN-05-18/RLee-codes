import { Component, OnInit } from '@angular/core';

import { GoldService } from '../gold.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  OnClick(location) {
    console.log(location, "clicked")
    this.goldService.collect(location);
  }

  constructor(private goldService: GoldService) { }

  ngOnInit() {
  }

}
