import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zone Display';
  recent = {
    // "America/Los_Angeles"
    'pst': false,

    // 'America/Denver'
    'mst': false,

    // 'America/Chicago'
    'cst': false,

    // America/New_York
    'est': false,

    'clear': true,
  }

  now: string;


  timeButtonClick(data, tz?) {
    console.log(`click event ${data}`);
    for (let zone in this.recent) {

      if (zone == data) {
        this.recent[zone] = true;
        if (tz) {
          //
          // gets UTC and converts to selected timezone via offset passed in as optional parameter 'tz'
          //consequently this will work whatever the local timezone of the user.
          //BONUS OBJECTIVE COMPLETE
          let offset = tz;
          this.now = new Date(
            Date.now() + offset * 3600 * 1000
          ).toUTCString().replace(/ GMT$/, "")
        }
      } else {
        this.recent[zone] = false;
      }
    }
  }

}


