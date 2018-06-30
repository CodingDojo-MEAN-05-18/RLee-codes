import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogComponent } from './log/log.component';
import { LocationsComponent } from './locations/locations.component';

import { GoldService } from './gold.service';

import { AbsValPipe } from './absval.pipe';

@NgModule({
  declarations: [
    AbsValPipe,
    AppComponent,
    LogComponent,
    LocationsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GoldService],
  bootstrap: [AppComponent]
})
export class AppModule { }
