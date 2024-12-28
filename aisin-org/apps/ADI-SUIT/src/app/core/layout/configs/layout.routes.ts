import { Routes } from '@angular/router';

export const LayoutRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../layout.component').then((m) => m.LayoutComponent),
    children: [
      {
        path: 'ADI',
        loadChildren: () =>
          import('../../../public/modules/ADI/ADI.routes').then(
            (m) => m.ADIRoutes
          ),
      },
      {
        path: 'Human-Resources',
        loadChildren: () =>
          import('../../../public/modules/Human-Resources/hr.routes').then(
            (m) => m.HRRoutes
          ),
      },
      {
        path: 'Safety',
        loadChildren: () =>
          import('../../../public/modules/Safety/safety.routes').then(
            (m) => m.SafetyRoutes
          ),
      },
      {
        path: 'Andons',
        loadChildren: () =>
          import('../../../public/modules/Andons/andons.routes').then(
            (m) => m.SafetyRoutes
          ),
      },
    ],
  },
];
