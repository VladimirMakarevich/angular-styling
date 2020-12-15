import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from '../@angs/components/header/header.module';
import { GridModule } from "../@angs/components/grid/grid.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HeaderModule,
        GridModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
