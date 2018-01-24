import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEndpointFormComponent } from './add-endpoint-form.component';

describe('AddEndpointFormComponent', () => {
  let component: AddEndpointFormComponent;
  let fixture: ComponentFixture<AddEndpointFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEndpointFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEndpointFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
