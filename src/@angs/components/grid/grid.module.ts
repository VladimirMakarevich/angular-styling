import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GridComponent } from './grid.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    GridComponent
  ],
  exports: [
    GridComponent
  ]
})
export class GridModule {
}
