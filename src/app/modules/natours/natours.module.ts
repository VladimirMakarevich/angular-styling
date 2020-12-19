import { NgModule } from '@angular/core';

import { NatoursRoutingModule } from './natours-routing.module';
import { NatoursComponent } from './natours.component';
import { HeaderModule } from '../../../@angs/components/main/header.module';
import { MainModule } from '../../../@angs/components/header/main.module';

@NgModule({
  imports: [
    NatoursRoutingModule,
    HeaderModule,
    MainModule
  ],
  declarations: [
    NatoursComponent
  ],
  providers: []
})
export class NatoursModule {
}
