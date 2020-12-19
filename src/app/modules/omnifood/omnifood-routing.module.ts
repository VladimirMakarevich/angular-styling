import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OmnifoodComponent } from './omnifood.component';

const routes: Routes = [
  {
    path: '',
    component: OmnifoodComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OmnifoodRoutingModule {
}
