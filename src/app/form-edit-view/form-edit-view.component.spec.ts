import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditViewComponent } from './form-edit-view.component';

describe('FormEditViewComponent', () => {
  let component: FormEditViewComponent;
  let fixture: ComponentFixture<FormEditViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormEditViewComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FormEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
