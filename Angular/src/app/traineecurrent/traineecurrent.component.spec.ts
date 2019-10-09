import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineecurrentComponent } from './traineecurrent.component';

describe('TraineecurrentComponent', () => {
  let component: TraineecurrentComponent;
  let fixture: ComponentFixture<TraineecurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraineecurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineecurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
