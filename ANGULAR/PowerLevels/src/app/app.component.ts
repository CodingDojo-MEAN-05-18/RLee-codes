import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PowerLevels';

  power: number;
  powerLevel: number;
  

  onSubmitPower(event: Event) {
    if (this.power < 1 || this.power > 100) {
      this.power = null;
    }
    event.preventDefault;
    this.powerLevel = this.power;
    console.log("Power Submitted", this.power)
  }
}
