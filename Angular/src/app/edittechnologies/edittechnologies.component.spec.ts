import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittechnologiesComponent } from './edittechnologies.component';

describe('EdittechnologiesComponent', () => {
  let component: EdittechnologiesComponent;
  let fixture: ComponentFixture<EdittechnologiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittechnologiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
