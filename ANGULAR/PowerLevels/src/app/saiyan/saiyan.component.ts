import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-saiyan',
  templateUrl: './saiyan.component.html',
  styleUrls: ['./saiyan.component.css', '../app.component.css']
})
export class SaiyanComponent implements OnInit {

  @Input() public powerLevel: number;
  public saiyanPower: number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.saiyanPower = this.powerLevel * 10;
  }

}
