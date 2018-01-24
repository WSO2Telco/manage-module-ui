import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOperatorEndpointComponent } from './create-operator-endpoint.component';

describe('CreateOperatorEndpointComponent', () => {
  let component: CreateOperatorEndpointComponent;
  let fixture: ComponentFixture<CreateOperatorEndpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOperatorEndpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOperatorEndpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
