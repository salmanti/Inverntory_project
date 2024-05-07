import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisSaleComponent } from './dis-sale.component';

describe('DisSaleComponent', () => {
  let component: DisSaleComponent;
  let fixture: ComponentFixture<DisSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
