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
        label: 'Files',
        icon: 'pi pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-plus',
            command: () => {
              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'File created',
                life: 3000,
              });
            },
          },
          {
            label: 'Search',
            icon: 'pi pi-search',
            command: () => {
              this.messageService.add({
                severity: 'warn',
                summary: 'Search Results',
                detail: 'No results found',
                life: 3000,
              });
            },
          },
          {
            label: 'Print',
            icon: 'pi pi-print',
            command: () => {
              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'No printer connected',
                life: 3000,
              });
            },
          },
        ],
      },
      {
        label: 'Sync',
        icon: 'pi pi-cloud',
        items: [
          {
            label: 'Import',
            icon: 'pi pi-cloud-download',
            command: () => {
              this.messageService.add({
                severity: 'info',
                summary: 'Downloads',
                detail: 'Downloaded from cloud',
                life: 3000,
              });
            },
          },
          {
            label: 'Export',
            icon: 'pi pi-cloud-upload',
            command: () => {
              this.messageService.add({
                severity: 'info',
                summary: 'Shared',
                detail: 'Exported to cloud',
                life: 3000,
              });
            },
          },
        ],
      },
      {
        label: 'Sign Out',
        icon: 'pi pi-sign-out',
        command: () => {
          this.messageService.add({
            severity: 'info',
            summary: 'Signed out',
            detail: 'User logged out',
            life: 3000,
          });
        },
      },
    ];
  }
}
