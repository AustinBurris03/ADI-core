import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'adi-adi-ui-table',
  imports: [CommonModule, TableModule],
  templateUrl: './adi-ui-table.component.html',
  styleUrl: './adi-ui-table.component.scss',
})
export class AdiUiTableComponent {
  @Input() data: any[] = [];
  @Input() columns: any[] = [];
  @Output() rowSelect = new EventEmitter<any>();

  onRowSelect(event: any): void {
    this.rowSelect.emit(event.data);
  }
}
