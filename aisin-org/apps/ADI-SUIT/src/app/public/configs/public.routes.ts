import { Routes } from '@angular/router';

export const PublicRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../overview.component').then((m) => m.OverviewComponent),
    children: [],
  },
];
