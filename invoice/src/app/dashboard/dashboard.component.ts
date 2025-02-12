import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollAnimationDirective } from '../directives/scroll-animation.directive';
import { AccountingComponent } from '../accounting/accounting.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, ScrollAnimationDirective, AccountingComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
