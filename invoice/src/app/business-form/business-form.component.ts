import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { DataSharingServiceService } from '../data-sharing-service.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-business-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './business-form.component.html',
  styleUrl: './business-form.component.css',
})
export class BusinessFormComponent {
  checkBoxClick: boolean = true;
  teamCheckBox: boolean | undefined;

  private dataSharingService = inject(DataSharingServiceService);

  form = new FormGroup({
    business: new FormControl('', {
      validators: [Validators.required],
    }),
   
    phoneNumber: new FormControl('', {
      validators: [Validators.required],
    }),
    businessSince: new FormControl('', {
      validators: [Validators.required],
    }),
    country: new FormControl(''),
    currency: new FormControl(''),
  });

  countryCodes: { code: string; name: string }[] = [
    { code: '+1', name: 'US' },
    { code: '+91', name: 'IN' },
    { code: '+44', name: 'UK' },
    { code: '+61', name: 'AU' },
    { code: '+81', name: 'JP' },
    { code: '+49', name: 'DE' },
    { code: '+33', name: 'FR' },
    { code: '+39', name: 'IT' },
    { code: '+55', name: 'BR' },
    { code: '+7', name: 'RU' },
  ];
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
  currency: string[] = [
    'INR',
    'USD',
    'CAD',
    'GBP',
    'AUD',
    'EUR',
    'CNY',
    'JPY',
    'BRL',
    'ZAR',
  ];

  checkbox1 = true;
  checkbox2 = false;

  onCheckboxChange(checkbox: string, event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;

    if (checkbox === 'checkbox1') {
      this.checkbox1 = isChecked;
      if (isChecked) {
        this.checkbox2 = false;
      }
    } else if (checkbox === 'checkbox2') {
      this.checkbox2 = isChecked;
      if (isChecked) {
        this.checkbox1 = false;
      }
    }
  }

  constructor(private router: Router) {}

  sendData() {
    const business = this.form.value.business;
    if (business) {
      const data = business.trim();
      this.dataSharingService.setBusinessName(data);
      this.router.navigate(['app']);
    }
  }
}
