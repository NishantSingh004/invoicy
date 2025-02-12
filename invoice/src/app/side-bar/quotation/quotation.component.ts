import { Component, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-quotation',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './quotation.component.html',
  styleUrl: './quotation.component.css',
})
export class QuotationComponent {}
