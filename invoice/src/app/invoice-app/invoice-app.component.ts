import { Component, input, OnInit } from '@angular/core';
import { AppNavbarComponent } from '../app-navbar/app-navbar.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { UserMenuComponent } from '../user-menu/user-menu.component';
import { AfterRegistrationComponent } from '../after-registration/after-registration.component';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { NotificationsComponent } from '../user-menu/notifications/notifications.component';

@Component({
  selector: 'app-invoice-app',
  standalone: true,
  imports: [
    AppNavbarComponent,
    SideBarComponent,
    UserMenuComponent,
    AfterRegistrationComponent,
    RouterOutlet,
    NotificationsComponent,
  ],
  templateUrl: './invoice-app.component.html',
  styleUrl: './invoice-app.component.css',
})
export class InvoiceAppComponent {
  menuValue: boolean = false;
  profile: boolean | undefined;
  notification: boolean | undefined;

  onMenuClick(value: boolean) {
    this.menuValue = value;
  }

  onSidebarClose(value: boolean) {
    this.menuValue = value;
  }

  onPerson(value: boolean) {
    this.profile = value;
  }

  onNotification(value: boolean) {
    this.notification = value;
  }
}
