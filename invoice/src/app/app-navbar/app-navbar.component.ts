import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './app-navbar.component.html',
  styleUrl: './app-navbar.component.css',
})
export class AppNavbarComponent {
  @Input() menuValu: boolean = false;
  profiles: boolean = false;
  @Output() menuOut = new EventEmitter<boolean>();
  profileclicked = output<boolean>();
  notification: boolean = false;
  notificationClicked = output<boolean>();

  menuClick() {
    this.menuValu = !this.menuValu;
    this.menuOut.emit(this.menuValu);
  }
  profileClick() {
    this.profiles = !this.profiles;
    this.profileclicked.emit(this.profiles);
  }

  notificationClick() {
    this.notification = !this.notification;
    this.notificationClicked.emit(this.notification);
  }
}
