import { ComponentFixture, TestBed } from '@angular/core/testing';
import { E4SmallPartCountComponent } from './e4-small-part-count.component';

describe('E4SmallPartCountComponent', () => {
  let component: E4SmallPartCountComponent;
  let fixture: ComponentFixture<E4SmallPartCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [E4SmallPartCountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(E4SmallPartCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
