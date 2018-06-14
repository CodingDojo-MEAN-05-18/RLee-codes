import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  x: number = 7;
  y: number = 9;
  myStr: string = 'My String';
  item = {
    type: 'card',
    name: 'Vaevictus Asmadi',
  };
  today = new Date();
  names = [
    'Artie', 'Smartie', 'Fuschia', 'Floyd', 'Lyp', 'Sync'
  ];
  myBoolean: boolean = true;
  color: string = 'white';


}
