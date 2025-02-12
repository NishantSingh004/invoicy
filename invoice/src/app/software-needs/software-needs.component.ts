import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../directives/scroll-animation.directive';

@Component({
  selector: 'app-software-needs',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './software-needs.component.html',
  styleUrl: './software-needs.component.css',
})
export class SoftwareNeedsComponent {}
