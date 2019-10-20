import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkdetailPage } from './homeworkdetail.page';

describe('HomeworkdetailPage', () => {
  let component: HomeworkdetailPage;
  let fixture: ComponentFixture<HomeworkdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkdetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
