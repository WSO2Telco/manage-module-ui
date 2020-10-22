import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionDetailComponent } from './subscription-detail.component';

describe('ApplicationDetailComponent', () => {
  let component: SubscriptionDetailComponent;
  let fixture: ComponentFixture<SubscriptionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
