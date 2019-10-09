import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineecompletedComponent } from './traineecompleted.component';

describe('TraineecompletedComponent', () => {
  let component: TraineecompletedComponent;
  let fixture: ComponentFixture<TraineecompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraineecompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineecompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
