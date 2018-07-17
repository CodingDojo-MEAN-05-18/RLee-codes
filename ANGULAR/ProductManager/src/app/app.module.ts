import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//importing barrelled routes
import * as fromRoutes from './routes';

//importing the product service
import { ProductService } from './product.service';



@NgModule({
  declarations: [
    AppComponent,
    ...fromRoutes.components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
