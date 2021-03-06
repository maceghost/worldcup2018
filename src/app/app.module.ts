import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FifaService} from './fifa.service';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FifaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
