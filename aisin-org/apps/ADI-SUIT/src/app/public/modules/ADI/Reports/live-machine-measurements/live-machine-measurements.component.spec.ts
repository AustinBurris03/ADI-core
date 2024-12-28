import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LiveMachineMeasurementsComponent } from './live-machine-measurements.component';

describe('LiveMachineMeasurementsComponent', () => {
  let component: LiveMachineMeasurementsComponent;
  let fixture: ComponentFixture<LiveMachineMeasurementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveMachineMeasurementsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LiveMachineMeasurementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
