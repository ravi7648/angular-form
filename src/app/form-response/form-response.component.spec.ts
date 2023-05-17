import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormResponseComponent } from './form-response.component';

describe('FormResponseComponent', () => {
  let component: FormResponseComponent;
  let fixture: ComponentFixture<FormResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormResponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
