import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan',
  templateUrl: './super-saiyan.component.html',
  styleUrls: ['./super-saiyan.component.css', '../app.component.css']
})
export class SuperSaiyanComponent implements OnInit {

  @Input() public powerLevel: number;
  public superSaiyan: number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.superSaiyan = this.powerLevel * 90;
  }
}
