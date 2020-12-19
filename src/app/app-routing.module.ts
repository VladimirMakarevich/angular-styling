import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: '/natours',
        pathMatch: 'full',
      },
      {
        path: 'natours',
        loadChildren: () => import('./modules/natours/natours.module').then(m => m.NatoursModule)
      },
      {
        path: 'omnifood',
        loadChildren: () => import('./modules/omnifood/omnifood.module').then(m => m.OmnifoodModule)
      }
    ]
  },
  {
    path: '**',
    loadChildren: () => import('./modules/natours/natours.module').then(m => m.NatoursModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
