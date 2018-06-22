import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddlecomponentComponent } from './middlecomponent.component';

describe('MiddlecomponentComponent', () => {
  let component: MiddlecomponentComponent;
  let fixture: ComponentFixture<MiddlecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddlecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddlecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
