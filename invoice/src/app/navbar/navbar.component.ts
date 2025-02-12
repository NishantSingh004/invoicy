import { Component, output } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  menuValue: boolean = false;
  register: boolean = false;

  onSelectMenu() {
    this.menuValue = !this.menuValue;
  }
  onNavLinkClick() {
    this.menuValue = false;
  }
  onRegister() {
    this.register = !this.register;
  }
}
