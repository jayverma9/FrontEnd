import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtensilsPopupDialogComponent } from './utensils-popup-dialog.component';

describe('UtensilsPopupDialogComponent', () => {
  let component: UtensilsPopupDialogComponent;
  let fixture: ComponentFixture<UtensilsPopupDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtensilsPopupDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtensilsPopupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
