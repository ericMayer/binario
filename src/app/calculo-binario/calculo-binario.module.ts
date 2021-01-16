import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgxMaskModule } from 'ngx-mask';

import { CalculoBinarioComponent } from './calculo-binario.component';
import { SharedModule } from '../shared/modules/shared.module';
import { MaterialModule } from '../shared/modules/material.module';
import { CalculoBinarioRouting } from './calculo-binario.routing';


@NgModule({
  imports: [
    CalculoBinarioRouting,
    CommonModule,
    SharedModule,
    FormsModule,
    MaterialModule,
    NgxMaskModule.forRoot(),
  ],
  declarations: [ 
    CalculoBinarioComponent
  ]
})
export class CalculoBinarioModule { }
