import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollAnimationDirective } from '../directives/scroll-animation.directive';

@Component({
  selector: 'app-accounting',
  standalone: true,
  imports: [RouterLink, ScrollAnimationDirective],
  templateUrl: './accounting.component.html',
  styleUrl: './accounting.component.css',
})
export class AccountingComponent {}
