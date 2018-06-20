import { Component } from '@angular/core';
import { User } from './user';
import { States } from './states';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  states = States;
  user = new User();

  title = 'Registration App';
  newUser: Object;

  onSubmit() {
    console.log("form Submitted");
    this.newUser = this.user;
    this.user = new User();
  }
  // STILL NEED TO FIND A WAY TO PREVENT ALL ERROR MESSAGES FROM APPEARING WHEN FORM IS SUBMITTED
}
