import { Routes } from '@angular/router';

export const SafetyRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./Andons-container.component').then(
        (m) => m.AndonsContainerComponent
      ),
    children: [
      {
        path: 'daily-power-summary',
        loadComponent: () =>
          import('./daily-power-summary/daily-power-summary.component').then(
            (m) => m.DailyPowerSummaryComponent
          ),
      },
      {
        path: 'finished-goods-robot',
        loadComponent: () =>
          import('./finished-goods-robot/finished-goods-robot.component').then(
            (m) => m.FinishedGoodsRobotComponent
          ),
      },
      {
        path: 'lineside-andons',
        loadComponent: () =>
          import('./lineside-andons/lineside-andons.component').then(
            (m) => m.LinesideAndonsComponent
          ),
      },
      {
        path: 'qa-team-training-info',
        loadComponent: () =>
          import(
            './qa-team-training-info/qa-team-training-info.component'
          ).then((m) => m.QaTeamTrainingInfoComponent),
      },
      {
        path: 'weekly-hoshin',
        loadComponent: () =>
          import('./weekly-hoshin/weekly-hoshin.component').then(
            (m) => m.WeeklyHoshinComponent
          ),
      },
    ],
  },

  {
    path: '**',
    redirectTo: '',
  },
];
