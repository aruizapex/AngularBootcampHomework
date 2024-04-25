import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LazyComponentComponent } from './lazy-component/lazy-component.component';
import { SlugComponent } from './slug/slug.component';

const routes: Routes = [
  {
    path: '',
    component: LazyComponentComponent
  },
]

@NgModule({
  declarations: [
    SlugComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LazyModule { }
