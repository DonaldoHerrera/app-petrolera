import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsallPage } from './subjectsall.page';

describe('SubjectsallPage', () => {
  let component: SubjectsallPage;
  let fixture: ComponentFixture<SubjectsallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsallPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
