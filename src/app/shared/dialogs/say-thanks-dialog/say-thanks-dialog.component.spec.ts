import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SayThanksDialogComponent } from './say-thanks-dialog.component';

describe('SayThanksDialogComponent', () => {
  let component: SayThanksDialogComponent;
  let fixture: ComponentFixture<SayThanksDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SayThanksDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SayThanksDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
