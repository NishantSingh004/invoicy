import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceAppComponent } from './invoice-app.component';

describe('InvoiceAppComponent', () => {
  let component: InvoiceAppComponent;
  let fixture: ComponentFixture<InvoiceAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvoiceAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
