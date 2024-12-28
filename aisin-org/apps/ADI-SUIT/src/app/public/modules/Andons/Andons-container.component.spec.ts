import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AndonsContainerComponent } from './Andons-container.component';

describe('AndonsContainerComponent', () => {
  let component: AndonsContainerComponent;
  let fixture: ComponentFixture<AndonsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AndonsContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AndonsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
