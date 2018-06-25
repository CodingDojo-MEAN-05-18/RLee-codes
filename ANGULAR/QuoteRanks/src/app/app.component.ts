import { Component, Output } from '@angular/core';
import { Quote } from './quote';
import { NgForm } from '@angular/forms';
import { samples } from './samples';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  quote= new Quote();
  newQuote: Quote;
  quotes: Array<Quote> = samples;

  title = 'Quote Ranks';

  onSubmit(event, form: NgForm) {
    console.log("quote submitted");
    this.newQuote = this.quote;
    this.quotes.push(this.newQuote);
    this.quote = new Quote();
    form.reset();
  }


}

