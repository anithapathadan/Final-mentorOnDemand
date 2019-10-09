import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerlandingComponent } from './trainerlanding.component';

describe('TrainerlandingComponent', () => {
  let component: TrainerlandingComponent;
  let fixture: ComponentFixture<TrainerlandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerlandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
