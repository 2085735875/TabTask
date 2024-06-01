import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabComponent } from './tab/tab.component';
import { Tab2Component } from './tab2/tab2.component';
import { Tab3Component } from './tab3/tab3.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    Tab2Component,
    Tab3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
