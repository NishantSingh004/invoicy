import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgClass, NgFor } from '@angular/common';
import { ScrollAnimationDirective } from '../directives/scroll-animation.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [NavbarComponent, NgFor, NgClass, ScrollAnimationDirective, RouterLink],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  plans = [
    {
      name: 'Free',
      price: '$0/mo',
      features: [
        'Basic invoice templates',
        '10 invoices per month',
        'Email support',
        'Download invoices in PDF'
      ],
      btnText: 'Get Started',
      premium: false,
      routerLink: '/register'
    },
    {
      name: 'Standard',
      price: '$500/mo',
      features: [
        'Custom invoice templates',
        'Unlimited invoices',
        'Email & chat support'
      ],
      btnText: 'Buy Plan',
      premium: false // Ensure this exists
    },
    {
      name: 'Premium',
      price: '$1000/mo',
      features: [
        'All Standard features',
        'Automated invoice reminders',
        'Integration with accounting software'
      ],
      btnText: 'Buy Plan',
      premium: true // Mark as premium
    },
    {
      name: 'Enterprise',
      price: '$4000/mo',
      features: [
        'All Premium features',
        'Custom branding',
        'Dedicated account manager'
      ],
      btnText: 'Buy Plan',
      premium: false // Ensure this exists
    }
  ];
}
