import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculoBinarioComponent } from './calculo-binario.component';

const routes: Routes = [
  { 
    path: '',
    component: CalculoBinarioComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CalculoBinarioRouting { }
