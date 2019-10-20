import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesaddPage } from './filesadd.page';

describe('FilesaddPage', () => {
  let component: FilesaddPage;
  let fixture: ComponentFixture<FilesaddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesaddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesaddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
