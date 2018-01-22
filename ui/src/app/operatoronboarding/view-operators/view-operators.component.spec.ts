import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOperatorsComponent } from './view-operators.component';

describe('ViewOperatorsComponent', () => {
  let component: ViewOperatorsComponent;
  let fixture: ComponentFixture<ViewOperatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOperatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
