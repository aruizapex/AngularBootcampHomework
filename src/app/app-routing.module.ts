import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleRouteComponentComponent } from '@components/routes/simple-route-component/simple-route-component.component';
import { HomeComponent } from '@components/home/home.component';
import { NotFoundComponent } from '@components/not-found/not-found.component';
import { SlugComponent } from '@components/routes/slug/slug.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: 'simple',
    component: SimpleRouteComponentComponent
  },
  {
    path: 'lazy',
    loadChildren: () => import('./components/routes/lazy.module').then( m => m.LazyModule)
  },
  {
    path: 'slug/:slug',
    component: SlugComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
