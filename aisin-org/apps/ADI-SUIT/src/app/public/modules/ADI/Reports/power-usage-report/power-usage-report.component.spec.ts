import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PowerUsageReportComponent } from './power-usage-report.component';

describe('PowerUsageReportComponent', () => {
  let component: PowerUsageReportComponent;
  let fixture: ComponentFixture<PowerUsageReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PowerUsageReportComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PowerUsageReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
