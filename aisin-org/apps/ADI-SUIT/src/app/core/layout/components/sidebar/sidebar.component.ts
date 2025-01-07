import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem, MessageService } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { PanelMenu } from 'primeng/panelmenu';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'adi-sidebar',
  imports: [CommonModule, RouterModule, PanelMenu, ToastModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  providers: [MessageService],
})
export class SidebarComponent implements OnInit {
  items!: MenuItem[];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.items = [
      {
        label: 'ADI',
        icon: 'pi pi-chart-bar',
        items: [
          {
            label: 'Reports',
            icon: 'pi pi-folder',
            items: [
              { label: 'Alarms', routerLink: ['/ADI/reports/alarms'] },
              { label: 'CP-CPK', routerLink: ['/ADI/reports/cp-cpk'] },
              { label: 'DNA Report', routerLink: ['/ADI/reports/dna-report'] },
              {
                label: 'E4 Machine Report',
                routerLink: ['/ADI/reports/e4-machine-report'],
              },
              {
                label: 'E4 Part Machine Report',
                routerLink: ['/ADI/reports/e4-part-machine-report'],
              },
              {
                label: 'E4 Small Part Count',
                routerLink: ['/ADI/reports/e4-small-part-count'],
              },
              {
                label: 'FIFO Reports',
                routerLink: ['/ADI/reports/fifo-reports'],
              },
              {
                label: 'Live Machine Measurements',
                routerLink: ['/ADI/reports/live-machine-measurements'],
              },
              {
                label: 'Past Machine Measurements',
                routerLink: ['/ADI/reports/past-machine-measurements'],
              },
              { label: 'Passdown', routerLink: ['/ADI/reports/passdown'] },
              {
                label: 'Power Usage Report',
                routerLink: ['/ADI/reports/power-usage-report'],
              },
              {
                label: 'PPDA Error Logs',
                routerLink: ['/ADI/reports/ppda-error-logs'],
              },
              { label: 'QA Chart', routerLink: ['/ADI/reports/qa-chart'] },
              {
                label: 'Scrap Daily Tracker',
                routerLink: ['/ADI/reports/scrap-daily-tracker'],
              },
              {
                label: 'Conference Room Schedule',
                routerLink: ['/ADI/reports/conference-room-schedule'],
              },
            ],
          },
        ],
      },
      {
        label: 'Human Resources',
        icon: 'pi pi-users',
        items: [
          {
            label: 'ADI Apparel Store',
            routerLink: ['/Human-Resources/adi-apparel-store'],
          },
          {
            label: 'Benefits Links',
            routerLink: ['/Human-Resources/benefits-links'],
          },
        ],
      },
      {
        label: 'Safety',
        icon: 'pi pi-shield',
        items: [
          {
            label: 'Emergency Response',
            routerLink: ['/Safety/emergency-response'],
          },
          { label: 'Team', routerLink: ['/Safety/team'] },
        ],
      },
      {
        label: 'Andons',
        icon: 'pi pi-bolt',
        items: [
          {
            label: 'Daily Power Summary',
            routerLink: ['/Andons/daily-power-summary'],
          },
          {
            label: 'Finished Goods Robot',
            routerLink: ['/Andons/finished-goods-robot'],
          },
          { label: 'Lineside Andons', routerLink: ['/Andons/lineside-andons'] },
          {
            label: 'QA Team Training Info',
            routerLink: ['/Andons/qa-team-training-info'],
          },
          { label: 'Weekly Hoshin', routerLink: ['/Andons/weekly-hoshin'] },
        ],
      },
    ];

  }
}
