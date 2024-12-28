import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DnaReportComponent } from './dna-report.component';

describe('DnaReportComponent', () => {
  let component: DnaReportComponent;
  let fixture: ComponentFixture<DnaReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DnaReportComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DnaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
