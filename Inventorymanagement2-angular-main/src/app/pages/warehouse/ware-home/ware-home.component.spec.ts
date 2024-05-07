import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WareHomeComponent } from './ware-home.component';

describe('WareHomeComponent', () => {
  let component: WareHomeComponent;
  let fixture: ComponentFixture<WareHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WareHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WareHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
