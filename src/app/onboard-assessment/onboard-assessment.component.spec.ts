import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardAssessmentComponent } from './onboard-assessment.component';

describe('OnboardAssessmentComponent', () => {
  let component: OnboardAssessmentComponent;
  let fixture: ComponentFixture<OnboardAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardAssessmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
