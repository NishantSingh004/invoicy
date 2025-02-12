import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilledByComponent } from './billed-by.component';

describe('BilledByComponent', () => {
  let component: BilledByComponent;
  let fixture: ComponentFixture<BilledByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BilledByComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BilledByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
