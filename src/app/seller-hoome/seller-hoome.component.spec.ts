import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerHoomeComponent } from './seller-hoome.component';

describe('SellerHoomeComponent', () => {
  let component: SellerHoomeComponent;
  let fixture: ComponentFixture<SellerHoomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerHoomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerHoomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
