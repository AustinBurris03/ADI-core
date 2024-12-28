import { Routes } from '@angular/router';

export const ADIRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./ADI-container.component').then((m) => m.ADIContainerComponent),
    children: [
      {
        path: 'reports',
        loadComponent: () =>
          import('./ADI-container.component').then(
            (m) => m.ADIContainerComponent
          ),
        children: [
          {
            path: 'alarms',
            loadComponent: () =>
              import('./Reports/alarms/alarms.component').then(
                (m) => m.AlarmsComponent
              ),
          },
          {
            path: 'cp-cpk',
            loadComponent: () =>
              import('./Reports/cp-cpk/cp-cpk.component').then(
                (m) => m.CpCpkComponent
              ),
          },
          {
            path: 'dna-report',
            loadComponent: () =>
              import('./Reports/dna-report/dna-report.component').then(
                (m) => m.DnaReportComponent
              ),
          },
          {
            path: 'e4-machine-report',
            loadComponent: () =>
              import(
                './Reports/e4-machine-report/e4-machine-report.component'
              ).then((m) => m.E4MachineReportComponent),
          },
          {
            path: 'e4-part-machine-report',
            loadComponent: () =>
              import(
                './Reports/e4-part-machine-report/e4-part-machine-report.component'
              ).then((m) => m.E4PartMachineReportComponent),
          },
          {
            path: 'e4-small-part-count',
            loadComponent: () =>
              import(
                './Reports/e4-small-part-count/e4-small-part-count.component'
              ).then((m) => m.E4SmallPartCountComponent),
          },
          {
            path: 'fifo-reports',
            loadComponent: () =>
              import('./Reports/fifo-reports/fifo-reports.component').then(
                (m) => m.FifoReportsComponent
              ),
          },
          {
            path: 'live-machine-measurements',
            loadComponent: () =>
              import(
                './Reports/live-machine-measurements/live-machine-measurements.component'
              ).then((m) => m.LiveMachineMeasurementsComponent),
          },
          {
            path: 'past-machine-measurements',
            loadComponent: () =>
              import(
                './Reports/past-machine-measurements/past-machine-measurements.component'
              ).then((m) => m.PastMachineMeasurementsComponent),
          },
          {
            path: 'passdown',
            loadComponent: () =>
              import('./Reports/passdown/passdown.component').then(
                (m) => m.PassdownComponent
              ),
          },
          {
            path: 'power-usage-report',
            loadComponent: () =>
              import(
                './Reports/power-usage-report/power-usage-report.component'
              ).then((m) => m.PowerUsageReportComponent),
          },
          {
            path: 'ppda-error-logs',
            loadComponent: () =>
              import(
                './Reports/ppda-error-logs/ppda-error-logs.component'
              ).then((m) => m.PpdaErrorLogsComponent),
          },
          {
            path: 'qa-chart',
            loadComponent: () =>
              import('./Reports/qa-chart/qa-chart.component').then(
                (m) => m.QaChartComponent
              ),
          },
          {
            path: 'scrap-daily-tracker',
            loadComponent: () =>
              import(
                './Reports/scrap-daily-tracker/scrap-daily-tracker.component'
              ).then((m) => m.ScrapDailyTrackerComponent),
          },
          {
            path: 'conference-room-schedule',
            loadComponent: () =>
              import(
                './Reports/conference-room-schedule/conference-room-schedule.component'
              ).then((m) => m.ConferenceRoomScheduleComponent),
          },
        ],
      },

      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];
