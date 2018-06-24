import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css', '../app.component.css']
})
export class HumanComponent implements OnInit {

  @Input() public powerLevel: number;

  constructor() { }

  ngOnInit() {
  }

}
