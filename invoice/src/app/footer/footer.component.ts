import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../directives/scroll-animation.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
