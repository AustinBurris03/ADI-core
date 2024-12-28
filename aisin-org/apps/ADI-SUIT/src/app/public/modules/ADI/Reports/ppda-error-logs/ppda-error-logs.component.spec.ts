import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PpdaErrorLogsComponent } from './ppda-error-logs.component';

describe('PpdaErrorLogsComponent', () => {
  let component: PpdaErrorLogsComponent;
  let fixture: ComponentFixture<PpdaErrorLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PpdaErrorLogsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PpdaErrorLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
