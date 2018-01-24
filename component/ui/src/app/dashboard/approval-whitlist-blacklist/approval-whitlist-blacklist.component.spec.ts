/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApprovalWhitelistBlacklistCountComponent } from './approval-whitlist-blacklist.component';

describe('ApprovalCountComponent', () => {
  let component: ApprovalWhitelistBlacklistCountComponent;
  let fixture: ComponentFixture<ApprovalWhitelistBlacklistCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalWhitelistBlacklistCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalWhitelistBlacklistCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
