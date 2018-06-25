import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit, OnChanges {

  @Input() public quotes: Array<Quote>;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    
  }

}
