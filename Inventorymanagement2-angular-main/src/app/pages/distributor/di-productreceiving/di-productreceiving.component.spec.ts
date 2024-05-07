import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiProductreceivingComponent } from './di-productreceiving.component';

describe('DiProductreceivingComponent', () => {
  let component: DiProductreceivingComponent;
  let fixture: ComponentFixture<DiProductreceivingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiProductreceivingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiProductreceivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
