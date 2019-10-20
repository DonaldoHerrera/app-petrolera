import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectdetailPage } from './subjectdetail.page';

describe('SubjectdetailPage', () => {
  let component: SubjectdetailPage;
  let fixture: ComponentFixture<SubjectdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectdetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
