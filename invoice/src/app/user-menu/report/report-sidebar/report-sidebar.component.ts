import { Component, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-report-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './report-sidebar.component.html',
  styleUrl: './report-sidebar.component.css',
})
export class ReportSidebarComponent {
  request: boolean = false;
  report: boolean = false;
  requestOut = output<boolean>();
  reportOut = output<boolean>();

  onRequest() {
    this.request = true;
    this.requestOut.emit(this.request);
  }

  onReport() {
    this.report = true;
    this.reportOut.emit(this.report);
  }
}
