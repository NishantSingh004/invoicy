import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareNeedsComponent } from './software-needs.component';

describe('SoftwareNeedsComponent', () => {
  let component: SoftwareNeedsComponent;
  let fixture: ComponentFixture<SoftwareNeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareNeedsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoftwareNeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
