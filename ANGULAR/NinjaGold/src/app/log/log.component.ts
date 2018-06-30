import { Component, OnInit } from '@angular/core';

import { GoldService } from '../gold.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  constructor(private goldService: GoldService) { }

  ngOnInit() {
  }

}
