import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuoteListComponent } from './quote-list/quote-list.component';

import { AuthorizePipe } from './authorize.pipe';
@NgModule({
  declarations: [
    AppComponent,
    QuoteListComponent,
    AuthorizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
