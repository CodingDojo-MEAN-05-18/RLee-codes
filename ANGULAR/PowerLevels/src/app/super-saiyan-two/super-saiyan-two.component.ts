import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-two',
  templateUrl: './super-saiyan-two.component.html',
  styleUrls: ['./super-saiyan-two.component.css', '../app.component.css']
})
export class SuperSaiyanTwoComponent implements OnInit {

  @Input() public powerLevel: number;
  public saiyanTwo: number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.saiyanTwo = this.powerLevel * 150
  }

}
