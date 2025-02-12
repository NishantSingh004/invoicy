import { Component } from '@angular/core';
import { ReportSidebarComponent } from './report-sidebar/report-sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-report-issue',
  standalone: true,
  imports: [ReportSidebarComponent, RouterOutlet],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css',
})
export class ReportComponent {}
