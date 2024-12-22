import { Routes } from '@angular/router';

export const LayoutRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../layout.component').then((m) => m.LayoutComponent),
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../../../public/configs/public.routes').then(
            (m) => m.PublicRoutes
          ),
      },
    ],
  },
];
