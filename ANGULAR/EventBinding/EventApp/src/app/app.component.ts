import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EventApp';
  y = "";
  onSelfClick(x, y) {
    this.title = "clicked"
    this.y = y;
    console.log(x, y);
  }

  onButtonClick(data) {
    console.log(`Click event is working, data:`, data);
  }
}
