import { Component } from '@angular/core';

import { GoldService } from './gold.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NinjaGold';

  constructor(private goldService: GoldService) { }
}
