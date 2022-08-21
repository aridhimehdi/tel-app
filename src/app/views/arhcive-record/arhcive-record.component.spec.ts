import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArhciveRecordComponent } from './arhcive-record.component';

describe('ArhciveRecordComponent', () => {
  let component: ArhciveRecordComponent;
  let fixture: ComponentFixture<ArhciveRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArhciveRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArhciveRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
