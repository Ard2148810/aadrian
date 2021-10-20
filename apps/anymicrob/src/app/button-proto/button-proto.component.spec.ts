import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonProtoComponent } from './button-proto.component';

describe('ButtonProtoComponent', () => {
  let component: ButtonProtoComponent;
  let fixture: ComponentFixture<ButtonProtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonProtoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonProtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
