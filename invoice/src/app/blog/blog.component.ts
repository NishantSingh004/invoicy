import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ScrollAnimationDirective } from '../directives/scroll-animation.directive';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NavbarComponent, ScrollAnimationDirective],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
