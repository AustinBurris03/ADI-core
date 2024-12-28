import { ComponentFixture, TestBed } from '@angular/core/testing';
import { E4PartMachineReportComponent } from './e4-part-machine-report.component';

describe('E4PartMachineReportComponent', () => {
  let component: E4PartMachineReportComponent;
  let fixture: ComponentFixture<E4PartMachineReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [E4PartMachineReportComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(E4PartMachineReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
