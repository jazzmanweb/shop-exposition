import {NgModule} from '@angular/core';
import {
  MatToolbarModule,
  MatGridListModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatGridListModule,
  ],
  exports: [
    MatToolbarModule,
    MatGridListModule,
  ],
  providers: [
  ]
})
export class AngularMaterialModule {}
