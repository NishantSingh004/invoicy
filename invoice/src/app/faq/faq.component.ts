import { CommonModule, NgIf } from '@angular/common';
import { Component, ChangeDetectorRef } from '@angular/core';
import { ScrollAnimationDirective } from '../directives/scroll-animation.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, NgIf, ScrollAnimationDirective],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FaqComponent {
  constructor(private cd: ChangeDetectorRef) {}

  faqList = [
    {
      question: 'What is this Invoice Generator?',
      answer:
        'Our invoice generator is an easy-to-use tool that helps businesses and freelancers create professional invoices in minutes.',
      isOpen: false,
    },
    {
      question: 'Is my data secure?',
      answer:
        'Yes, we use industry-standard encryption and security measures to protect your data.',
      isOpen: false,
    },
    {
      question: 'Can I customize my invoices?',
      answer:
        'Absolutely! You can add your logo, change colors, and edit invoice details to match your brand.',
      isOpen: false,
    },
    {
      question: 'Is the service free?',
      answer: 'We offer both free and premium plans with advanced features.',
      isOpen: false,
    },
    {
      question: 'How can I download my invoice?',
      answer: 'You can download your invoice as a PDF with a single click.',
      isOpen: false,
    },
  ];

  toggleFAQ(index: number): void {
    console.log('FAQ Clicked:', index); // Debugging log
    this.faqList[index].isOpen = !this.faqList[index].isOpen;
    this.cd.detectChanges(); // Force Angular to detect changes
  }
}
