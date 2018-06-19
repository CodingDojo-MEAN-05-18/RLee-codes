import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users = [];

  user = {
    firstName: "",
    lastName: ""
  };

  onSubmit() {
    console.log("form submitted");
    console.log(this.user);
    this.users.push(this.user);
    this.user = {
      firstName: "",
      lastName: ""
    };
    console.log(this.users);
  };

}
