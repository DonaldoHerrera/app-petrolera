import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAuthPage } from './page-auth.page';

describe('PageAuthPage', () => {
  let component: PageAuthPage;
  let fixture: ComponentFixture<PageAuthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAuthPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAuthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
