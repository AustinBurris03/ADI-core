import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CpCpkComponent } from './cp-cpk.component';

describe('CpCpkComponent', () => {
  let component: CpCpkComponent;
  let fixture: ComponentFixture<CpCpkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CpCpkComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CpCpkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
