import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RollADieComponent } from './roll-a-die/roll-a-die.component';
import { RollHistoryComponent } from './roll-history/roll-history.component';

@NgModule({
  declarations: [
    AppComponent,
    RollADieComponent,
    RollHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
