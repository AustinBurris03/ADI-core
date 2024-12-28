import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConferenceRoomScheduleComponent } from './conference-room-schedule.component';

describe('ConferenceRoomScheduleComponent', () => {
  let component: ConferenceRoomScheduleComponent;
  let fixture: ComponentFixture<ConferenceRoomScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConferenceRoomScheduleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConferenceRoomScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
