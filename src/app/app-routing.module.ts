import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./sign-in/sign-in.module').then(module => module.SignInModule)
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(module => module.DashboardModule),
  },
  {
    path: 'badges',
    loadChildren: () =>
      import('./badges/badges-page.module').then(module => module.BadgesPageModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
