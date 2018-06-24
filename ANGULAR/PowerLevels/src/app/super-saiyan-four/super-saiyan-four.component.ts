import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-four',
  templateUrl: './super-saiyan-four.component.html',
  styleUrls: ['./super-saiyan-four.component.css', '../app.component.css']
})
export class SuperSaiyanFourComponent implements OnInit {

  @Input() public powerLevel: number;
  public saiyanFour: number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.saiyanFour = this.powerLevel * 500;
  }
}
