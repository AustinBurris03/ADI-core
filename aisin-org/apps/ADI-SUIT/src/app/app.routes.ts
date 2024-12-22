import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./core/layout/configs/layout.routes').then((m) => m.LayoutRoutes), 
  },
];
