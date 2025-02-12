import { NgIf } from '@angular/common';
import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tax',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tax.component.html',
  styleUrl: './tax.component.css',
})
export class TaxComponent {
  taxSave = output();
  taxUsed = output<{
    igstTax: string;
    cgstTax: string;
    none: string;
  }>();

  igstTax = '';
  cgstTax = '';
  none = '';

  checkbox1: boolean = false;
  checkbox2: boolean = false;
  checkBoxChnage(checkbox: string, event: Event) {
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

  onSave() {
    this.taxUsed.emit({
      igstTax: this.igstTax,
      cgstTax: this.cgstTax,
      none: this.none,
    });
    this.taxSave.emit();
  }
}
