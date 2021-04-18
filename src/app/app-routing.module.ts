import { AuthGuard } from './core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/+sign-in/sign-in.module').then(module => module.SignInModule)
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/+dashboard/dashboard.module').then(module => module.DashboardModule),
      canActivate: [AuthGuard]
    },
  {
    path: 'badges',
    loadChildren: () =>
      import('./modules/+badges/badges-page.module').then(module => module.BadgesPageModule),
      canActivate: [AuthGuard]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
