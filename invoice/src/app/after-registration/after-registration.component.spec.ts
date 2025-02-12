import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterRegistrationComponent } from './after-registration.component';

describe('AfterRegistrationComponent', () => {
  let component: AfterRegistrationComponent;
  let fixture: ComponentFixture<AfterRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfterRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AfterRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
