import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [

  {
    path: '',
    component: NxWelcomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadComponent: () =>
      import('@angular-monorepo/products').then((m) => m.ProductListComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
