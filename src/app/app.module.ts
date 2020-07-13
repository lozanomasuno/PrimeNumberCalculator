import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SpringSpinnerModule } from 'angular-epic-spinners';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SpringSpinnerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
