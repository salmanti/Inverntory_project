import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisReturnstockComponent } from './dis-returnstock.component';

describe('DisReturnstockComponent', () => {
  let component: DisReturnstockComponent;
  let fixture: ComponentFixture<DisReturnstockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisReturnstockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisReturnstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
