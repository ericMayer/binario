import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageComponent } from './core/page/page.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      {
        path: 'calculo-binario',
        loadChildren: () => import('./calculo-binario/calculo-binario.module').then((m) => m.CalculoBinarioModule)
      }
    ],
  },
  {
    path: '**',
    component: PageComponent,
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
