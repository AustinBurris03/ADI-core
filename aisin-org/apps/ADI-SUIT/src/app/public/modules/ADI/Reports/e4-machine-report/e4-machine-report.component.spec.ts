import { ComponentFixture, TestBed } from '@angular/core/testing';
import { E4MachineReportComponent } from './e4-machine-report.component';

describe('E4MachineReportComponent', () => {
  let component: E4MachineReportComponent;
  let fixture: ComponentFixture<E4MachineReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [E4MachineReportComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(E4MachineReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
