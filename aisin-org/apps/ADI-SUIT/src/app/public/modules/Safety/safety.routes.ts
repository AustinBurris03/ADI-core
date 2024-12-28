import { Routes } from '@angular/router';

export const SafetyRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./safety-container.component').then(
        (m) => m.SafetyContainerComponent
      ),
    children: [
      {
        path: 'emergency-response',
        loadComponent: () =>
          import('./emergency-response/emergency-response.component').then(
            (m) => m.EmergencyResponseComponent
          ),
      },
      {
        path: 'team',
        loadComponent: () =>
          import('./team/team.component').then((m) => m.TeamComponent),
      },
    ],
  },

  {
    path: '**',
    redirectTo: '',
  },
];
