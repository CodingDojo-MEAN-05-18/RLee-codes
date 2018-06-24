import { Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-super-saiyan-three',
  templateUrl: './super-saiyan-three.component.html',
  styleUrls: ['./super-saiyan-three.component.css', '../app.component.css']
})
export class SuperSaiyanThreeComponent implements OnInit {

  @Input() public powerLevel: number;
  public saiyanThree: number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.saiyanThree = this.powerLevel * 250;
  }
}
