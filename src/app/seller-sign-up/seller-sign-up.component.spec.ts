import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerSignUpComponent } from './seller-sign-up.component';

describe('SellerSignUpComponent', () => {
  let component: SellerSignUpComponent;
  let fixture: ComponentFixture<SellerSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
