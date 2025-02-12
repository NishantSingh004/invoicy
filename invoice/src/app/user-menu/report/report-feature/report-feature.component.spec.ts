import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportFeatureComponent } from './report-feature.component';

describe('ReportFeatureComponent', () => {
  let component: ReportFeatureComponent;
  let fixture: ComponentFixture<ReportFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportFeatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
