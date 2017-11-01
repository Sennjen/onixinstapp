import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'explore',
    loadChildren: './explore/explore.module#ExploreModule'
  },
  {
    path: ':name',
    loadChildren: './profile/profile.module#ProfileModule'
  },
  {path: '**', redirectTo: 'home',},
];
