import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinesideAndonsComponent } from './lineside-andons.component';

describe('LinesideAndonsComponent', () => {
  let component: LinesideAndonsComponent;
  let fixture: ComponentFixture<LinesideAndonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinesideAndonsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LinesideAndonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
