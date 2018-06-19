import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration App';

  user = new User();

  onSubmit() {
    console.log("form Submitted");
    console.log(this.user);
  }
}
