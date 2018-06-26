import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {

  numbers: number[] = [];

  alphaClick() {
    let num: number = Math.floor((Math.random() * 99) + 1)
    this._dataService.addNumber(num);
    console.log("number added");
  }

  constructor(private _dataService: DataService) { }



  ngOnInit() {
    this.numbers = this._dataService.retrieveNumbers();
  }

}
