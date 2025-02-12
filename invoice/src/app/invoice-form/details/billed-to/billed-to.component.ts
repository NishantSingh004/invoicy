import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-billed-to',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './billed-to.component.html',
  styleUrl: './billed-to.component.css',
})
export class BilledToComponent {
  businessData = output<{ business: string; count: string; town: string }>();
  done = output();
  businessName = '';
  country = '';
  city = '';

  countries: string[] = [
    'India',
    'United States',
    'Canada',
    'United Kingdom',
    'Australia',
    'Germany',
    'China',
    'Japan',
    'Brazil',
    'South Africa',
  ];

  onSave() {
    this.businessData.emit({
      business: this.businessName,
      count: this.country,
      town: this.city,
    });
    this.done.emit();
  }
}
