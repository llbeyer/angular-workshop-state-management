import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCartActionsComponent } from './shop-cart-actions.component';

describe('ShopCartActionsComponent', () => {
  let component: ShopCartActionsComponent;
  let fixture: ComponentFixture<ShopCartActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopCartActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopCartActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
