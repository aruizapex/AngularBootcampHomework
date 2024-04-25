import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleProvidersInjectableComponent } from './module-providers-injectable.component';


@NgModule({
  declarations: [
    ModuleProvidersInjectableComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ModuleProvidersInjectableComponent
  ]
})
export class ModuleProvidersInjectableModule { }
