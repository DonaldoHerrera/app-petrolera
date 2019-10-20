import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkaddPage } from './homeworkadd.page';

describe('HomeworkaddPage', () => {
  let component: HomeworkaddPage;
  let fixture: ComponentFixture<HomeworkaddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkaddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkaddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
