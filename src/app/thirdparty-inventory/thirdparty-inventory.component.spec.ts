import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdpartyInventoryComponent } from './thirdparty-inventory.component';

describe('ThirdpartyInventoryComponent', () => {
  let component: ThirdpartyInventoryComponent;
  let fixture: ComponentFixture<ThirdpartyInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdpartyInventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdpartyInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
