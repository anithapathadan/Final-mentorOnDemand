import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeheaderComponent } from './traineeheader.component';

describe('TraineeheaderComponent', () => {
  let component: TraineeheaderComponent;
  let fixture: ComponentFixture<TraineeheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraineeheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
