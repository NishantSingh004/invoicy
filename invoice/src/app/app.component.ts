import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { AccountingComponent } from './accounting/accounting.component';
import { SoftwareNeedsComponent } from './software-needs/software-needs.component';
import { AfterRegistrationComponent } from './after-registration/after-registration.component';
import { FaqComponent } from './faq/faq.component';
import { CtaBannerComponent } from './cta-banner/cta-banner.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    DashboardComponent,
    HeaderComponent,
    RouterOutlet,
    SoftwareNeedsComponent,
    FaqComponent,
    CtaBannerComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'refrens-clone-project';
  isFullscreen: boolean = false;
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.routerState.root.snapshot.firstChild;
        this.isFullscreen = currentRoute?.data['fullscreen'] || false;
      }
    });
  }
}
