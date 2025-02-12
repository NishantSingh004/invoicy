import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-billed-by',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './billed-by.component.html',
  styleUrls: ['./billed-by.component.css'],
})
export class BilledByComponent {
  business = output<{ businessName: string; country: string; city: string }>();
  close = output();
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
    this.business.emit({
      businessName: this.businessName,
      country: this.country,
      city: this.city,
    });
    console.log(this.country);
    this.close.emit();
  }
}
