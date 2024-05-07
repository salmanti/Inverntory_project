import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisProductstockComponent } from './dis-productstock.component';

describe('DisProductstockComponent', () => {
  let component: DisProductstockComponent;
  let fixture: ComponentFixture<DisProductstockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisProductstockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisProductstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
