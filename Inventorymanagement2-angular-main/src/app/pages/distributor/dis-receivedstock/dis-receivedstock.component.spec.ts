import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisReceivedstockComponent } from './dis-receivedstock.component';

describe('DisReceivedstockComponent', () => {
  let component: DisReceivedstockComponent;
  let fixture: ComponentFixture<DisReceivedstockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisReceivedstockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisReceivedstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
