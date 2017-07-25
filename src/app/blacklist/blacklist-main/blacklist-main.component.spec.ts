import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlacklistMainComponent } from './blacklist-main.component';

describe('BlacklistMainComponent', () => {
  let component: BlacklistMainComponent;
  let fixture: ComponentFixture<BlacklistMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlacklistMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlacklistMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
