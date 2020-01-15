import { NgModule } from '@angular/core';
import { MatCardModule, MatListModule, MatButtonModule } from '@angular/material';

@NgModule({
  exports: [
    MatCardModule,
    MatListModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
