import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QaTeamTrainingInfoComponent } from './qa-team-training-info.component';

describe('QaTeamTrainingInfoComponent', () => {
  let component: QaTeamTrainingInfoComponent;
  let fixture: ComponentFixture<QaTeamTrainingInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QaTeamTrainingInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QaTeamTrainingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
