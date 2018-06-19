import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard!';

  length: number;
  board = {};
  boardKeys = [];
  error= '';

  onSubmit(event) {
    event.preventDefault();
    this.board = {};
    this.boardKeys = [];
    this.error = '';
    if (this.length <= 0) {
      this.error = "PLEASE ENTER A VALID VALUE. (number > 0)"
    } else {
      for (let x = 1; x <= this.length; x++) {
        this.board[x] = true;
        this.boardKeys.push(x);
      }
      console.log("Submitting form", this.board);
    }
  }

  onSwitchFlip(number) {
    if (this.board[number] == true) {
      this.board[number] = false;
    } else {
      this.board[number] = true;
    }
  }

}
