import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilledToComponent } from './billed-to.component';

describe('BilledToComponent', () => {
  let component: BilledToComponent;
  let fixture: ComponentFixture<BilledToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BilledToComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BilledToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
