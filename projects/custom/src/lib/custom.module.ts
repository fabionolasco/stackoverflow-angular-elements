import { NgModule } from '@angular/core';
import { CustomComponent } from './custom.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';

@NgModule({
  declarations: [CustomComponent, Comp1Component, Comp2Component],
  imports: [
  ],
  exports: [CustomComponent]
})
export class CustomModule { }
