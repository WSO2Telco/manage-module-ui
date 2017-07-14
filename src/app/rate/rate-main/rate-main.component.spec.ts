/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RateMainComponent } from './rate-main.component';

describe('RateMainComponent', () => {
  let component: RateMainComponent;
  let fixture: ComponentFixture<RateMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
