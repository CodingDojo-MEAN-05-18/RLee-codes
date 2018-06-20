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
  users = [];

  onSubmit() {
    console.log("form Submitted");
    this.users.push(this.user);
    const newUser = this.users[this.users.length - 1];
  }

}
