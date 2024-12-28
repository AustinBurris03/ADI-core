import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdiApparelStoreComponent } from './adi-apparel-store.component';

describe('AdiApparelStoreComponent', () => {
  let component: AdiApparelStoreComponent;
  let fixture: ComponentFixture<AdiApparelStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdiApparelStoreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdiApparelStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
