import { NgModule } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select'
import { MatInput, MatInputModule } from '@angular/material/input';



@NgModule({
  exports: [
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatInputModule
  ]
})

export class MaterialModule { }
