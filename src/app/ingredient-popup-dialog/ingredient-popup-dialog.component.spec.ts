import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientPopupDialogComponent } from './ingredient-popup-dialog.component';

describe('IngredientPopupDialogComponent', () => {
  let component: IngredientPopupDialogComponent;
  let fixture: ComponentFixture<IngredientPopupDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientPopupDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientPopupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
