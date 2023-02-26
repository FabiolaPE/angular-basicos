import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { HeroesModule } from './heroes/heroes.modulo';
import { ContadorModule } from './contador/contador.modulo';


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    //ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
