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
    Material.MatListModule,
    Material.MatDividerModule,
    Material.MatExpansionModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatListModule,
    Material.MatTableModule,
    Material.MatSortModule,
    Material.MatTableModule,
    Material.MatPaginatorModule,
    Material.MatTabsModule
  ],
  exports: [
    Material.MatToolbarModule,
    Material.MatIconModule,
    Material.MatSidenavModule,
    Material.MatButtonModule,
    Material.MatListModule,
    Material.MatDividerModule,
    Material.MatExpansionModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatListModule,
    Material.MatTableModule,
    Material.MatSortModule,
    Material.MatTableModule,
    Material.MatPaginatorModule,
    Material.MatTabsModule
  ],
  declarations: []
})
export class MaterialModule { }
