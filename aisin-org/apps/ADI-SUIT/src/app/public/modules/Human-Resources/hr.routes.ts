import { Routes } from '@angular/router';

export const HRRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./human-resources-container.component').then(
        (m) => m.HumanResourcesContainerComponent
      ),
    children: [
      {
        path: 'adi-apparel-store',
        loadComponent: () =>
          import('./adi-apparel-store/adi-apparel-store.component').then(
            (m) => m.AdiApparelStoreComponent
          ),
      },
      {
        path: 'benefits-links',
        loadComponent: () =>
          import('./benefits-links/benefits-links.component').then(
            (m) => m.BenefitsLinksComponent
          ),
      },
    ],
  },

  {
    path: '**',
    redirectTo: '',
  },
];
