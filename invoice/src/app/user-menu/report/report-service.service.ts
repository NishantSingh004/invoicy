import { Injectable } from '@angular/core';

interface Task {
  id: string;
  userId: string;
  title: string;
  text: string;
}

@Injectable({
  providedIn: 'root',
})
export class ReportServiceService {
  private textTitle: Task[] = [];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.textTitle = JSON.parse(tasks);
    }
  }

  getTasksByUserId(userId: string): Task[] {
    return this.textTitle.filter((task) => task.userId === userId);
  }

  addTask(text: string, title: string, userId: string) {
    this.textTitle.unshift({
      id: new Date().getTime().toString(),
      userId,
      title,
      text,
    });
    this.saveTasks();
  }

  deleteTask(taskId: string) {
    this.textTitle = this.textTitle.filter((task) => task.id !== taskId);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.textTitle));
  }
}
