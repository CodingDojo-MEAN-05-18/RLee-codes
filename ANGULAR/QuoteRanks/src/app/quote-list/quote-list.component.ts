import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit, OnChanges {

  @Input() public quotes: Array<Quote>;

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {}

  voteUp(statement: Quote) {
    statement.votes++;
    console.log(statement.votes);
  }

  voteDown(statement: Quote) {
    statement.votes--;
  }

  quoteDelete(statement: Quote) {
    this.quotes.splice(this.quotes.indexOf(statement), 1)
  }
}
