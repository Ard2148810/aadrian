import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ArduiModule } from '@aadrian/ardui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ArduiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
