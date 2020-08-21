import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TierDetailComponent } from './tier-detail.component';

describe('ApplicationDetailComponent', () => {
  let component: TierDetailComponent;
  let fixture: ComponentFixture<TierDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TierDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TierDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
