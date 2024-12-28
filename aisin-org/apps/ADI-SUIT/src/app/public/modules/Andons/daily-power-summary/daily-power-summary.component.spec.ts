import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DailyPowerSummaryComponent } from './daily-power-summary.component';

describe('DailyPowerSummaryComponent', () => {
  let component: DailyPowerSummaryComponent;
  let fixture: ComponentFixture<DailyPowerSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyPowerSummaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DailyPowerSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
