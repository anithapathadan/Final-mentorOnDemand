import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineelandingComponent } from './traineelanding.component';

describe('TraineelandingComponent', () => {
  let component: TraineelandingComponent;
  let fixture: ComponentFixture<TraineelandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraineelandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineelandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
