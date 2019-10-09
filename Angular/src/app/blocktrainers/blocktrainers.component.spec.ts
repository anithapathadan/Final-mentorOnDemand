import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocktrainersComponent } from './blocktrainers.component';

describe('BlocktrainersComponent', () => {
  let component: BlocktrainersComponent;
  let fixture: ComponentFixture<BlocktrainersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocktrainersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocktrainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
