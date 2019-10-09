import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstpagebodyComponent } from './firstpagebody.component';

describe('FirstpagebodyComponent', () => {
  let component: FirstpagebodyComponent;
  let fixture: ComponentFixture<FirstpagebodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstpagebodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstpagebodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
