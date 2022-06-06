import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsSliderTestComponent } from './steps-slider-test.component';

describe('StepsSliderTestComponent', () => {
  let component: StepsSliderTestComponent;
  let fixture: ComponentFixture<StepsSliderTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsSliderTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsSliderTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
