import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PastMachineMeasurementsComponent } from './past-machine-measurements.component';

describe('PastMachineMeasurementsComponent', () => {
  let component: PastMachineMeasurementsComponent;
  let fixture: ComponentFixture<PastMachineMeasurementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastMachineMeasurementsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PastMachineMeasurementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
