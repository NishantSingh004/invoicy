import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { ReportServiceService } from '../report-service.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-report-feature',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './report-feature.component.html',
  styleUrl: './report-feature.component.css',
})
export class ReportFeatureComponent {
  private reportService = inject(ReportServiceService);
  private cdr = inject(ChangeDetectorRef);
  tasks = this.reportService.getTasksByUserId('u1');
  userid: string = 'u1';
  title = '';
  text = '';

  onSubmit() {
    // Validate title and text fields
    if (this.title.trim() === '' || this.text.trim() === '') {
      alert('Title and Text cannot be empty!');
      return;
    }

    // Add the task
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

    // Update the tasks immediately
    this.tasks = this.reportService.getTasksByUserId(this.userid);

    // Detect changes to update the UI
    this.cdr.detectChanges();
  }

  onClear() {
    this.title = '';
    this.text = '';
  }
}
