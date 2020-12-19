import { NgModule } from '@angular/core';

import { OmnifoodRoutingModule } from './omnifood-routing.module';
import { OmnifoodComponent } from './omnifood.component';

@NgModule({
  imports: [
    OmnifoodRoutingModule
  ],
  declarations: [
    OmnifoodComponent
  ],
  providers: []
})
export class OmnifoodModule {
}
