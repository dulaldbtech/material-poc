import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    Material.MatToolbarModule,
    Material.MatIconModule,
    Material.MatSidenavModule,
    Material.MatButtonModule,
    Material.MatListModule
  ],
  exports: [
    Material.MatToolbarModule,
    Material.MatIconModule,
    Material.MatSidenavModule,
    Material.MatButtonModule,
    Material.MatListModule
  ],
  declarations: []
})
export class MaterialModule { }
