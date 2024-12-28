import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinishedGoodsRobotComponent } from './finished-goods-robot.component';

describe('FinishedGoodsRobotComponent', () => {
  let component: FinishedGoodsRobotComponent;
  let fixture: ComponentFixture<FinishedGoodsRobotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinishedGoodsRobotComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FinishedGoodsRobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
