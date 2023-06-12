import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonFunctionsComponent } from './common-functions.component';

describe('CommonFunctionsComponent', () => {
  let component: CommonFunctionsComponent;
  let fixture: ComponentFixture<CommonFunctionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonFunctionsComponent]
    });
    fixture = TestBed.createComponent(CommonFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
