import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReportServiceService } from '../report-service.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-report-bug',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './report-bug.component.html',
  styleUrl: './report-bug.component.css',
})
export class ReportBugComponent {
  private reportService = inject(ReportServiceService);
  private cdr = inject(ChangeDetectorRef); // Inject ChangeDetectorRef
  tasks = this.reportService.getTasksByUserId('u2');
  userid: string = 'u2';
  title = '';
  text = '';

  onSubmit() {
    this.reportService.addTask(this.text, this.title, this.userid);

    // Clear the form fields after submission
    this.title = '';
    this.text = '';

    // Update the task list immediately
    this.tasks = this.reportService.getTasksByUserId(this.userid);

    // Detect changes to update the UI
    this.cdr.detectChanges();
  }

  cleanTask(taskId: string) {
    this.reportService.deleteTask(taskId);
    this.tasks = this.reportService.getTasksByUserId(this.userid);
    this.cdr.detectChanges();
  }

  onClear() {
    this.title = '';
    this.text = '';
  }
}
