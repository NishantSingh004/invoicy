import { Component } from '@angular/core';
import { AddColumnComponent } from '../invoice-form/add-column/add-column.component';
import { NgFor } from '@angular/common';
import { BilledByComponent } from '../invoice-form/details/billed-by/billed-by.component';
import { BilledToComponent } from '../invoice-form/details/billed-to/billed-to.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TaxComponent } from '../invoice-form/tax/tax.component';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-quotation',
  standalone: true,
  imports: [
    AddColumnComponent,
    NgFor,
    BilledByComponent,
    BilledToComponent,
    FormsModule,
    TaxComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './quotation-form.component.html',
  styleUrl: './quotation-form.component.css',
})
export class QuotationFormComponent {
  shipping: boolean = false;
  condition: boolean = false;
  showBusiness: boolean = false;
  addRows: boolean = false;
  showBilledTo = false;

  // Array to store added rows
  rowAdded: {
    id: number;
    items: string;
    quantity: string;
    amount: string;
    rate: string;
    gst: string;
    igst: number;
    cgstSgst: number;
    igstTotal: number;
    cgstSgstTotal: number;
    total: number;
  }[] = [];

  // Total value of all rows
  grandTotal: number = 0;

  // Method to add rows and calculate grand total
  onAddRows(rowData: {
    id: number;
    items: string;
    quantity: string;
    rate: string;
    amount: string;
    gst: string;
    igst: number;
    cgstSgst: number;
    igstTotal: number;
    cgstSgstTotal: number;
    total: number;
  }) {
    // Add the new row to the array
    this.rowAdded.push(rowData);

    // Update the grand total
    this.grandTotal = this.rowAdded.reduce((sum, row) => sum + row.total, 0);
  }

  business = '';
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
  curren: string = this.currency[0];

  addShipping() {
    this.shipping = !this.shipping;
  }
  conditions() {
    this.condition = !this.condition;
  }
  delete() {
    this.condition = false;
  }
  addBusiness() {
    this.showBusiness = true;
  }
  addRow() {
    this.addRows = true;
  }

  cancel() {
    this.addRows = false;
  }
  onBusinessAdded(business: {
    businessName: string;
    country: string;
    city: string;
  }) {
    this.business = business.businessName;
    this.country = business.country;
    this.city = business.city;
  }
  onBilleClose() {
    this.showBusiness = false;
  }

  addBusinessData() {
    this.showBilledTo = true;
  }
  onBilleClosed() {
    this.showBilledTo = false;
  }
  businessname = '';
  count = '';
  town = '';
  onBilledtoAdded(billedTo: { business: string; count: string; town: string }) {
    this.businessname = billedTo.business;
    this.count = billedTo.count;
    this.town = billedTo.town;
  }
  tax = false;
  addTax() {
    this.tax = true;
  }

  gst = '';
  igst = '';
  cgst = '';
  none = '';

  taxsUsed(event: { igstTax: string; cgstTax: string; none: string }) {
    this.igst = event.igstTax;
    this.cgst = event.cgstTax;
    this.none = event.none;
  }
  onTaxSave() {
    this.tax = false;
  }
  getTaxEvent() {
    return {
      addTaxs: this.gst,
      igstTax: this.igst,
      cgstTax: this.cgst,
      none: this.none,
    };
  }
  igstAdded: number = 0.0;
  cgstSgstAdded: number = 0.0;
  igstTotal: number = 0.0;
  cgstSgstTotal: number = 0.0;
  total: number = 0.0;

  nonGst: {
    nonGst_items: string;
    nongst_quantity: string;
    nongst_rate: string;
    nongst_amount: string;
  }[] = [];

  nonGstTotal = 0;

  onNonGstRow(NonGstRow: {
    nonGst_items: string;
    nongst_quantity: string;
    nongst_rate: string;
    nongst_amount: string;
  }) {
    this.nonGst.push(NonGstRow);

    this.nonGstTotal = this.nonGst.reduce(
      (add, row) => add + +row.nongst_amount,
      0
    );
  }

  invoiceForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.invoiceForm = this.fb.group({
      invoiceNo: ['', Validators.required],
      invoiceDate: ['', Validators.required],
      dueDate: ['', Validators.required],

      shippingDetails: this.fb.group({
        shippedFrom: this.fb.group({
          name: [''],
          country: [''],
          address: [''],
          city: [''],
          postalCode: [''],
          state: [''],
        }),
        shippedTo: this.fb.group({
          name: [''],
          country: [''],
          address: [''],
          city: [''],
          postalCode: [''],
          state: [''],
        }),
      }),
      currency: [''],
    });
  }

  onSubmit(): void {
    if (this.invoiceForm.valid) {
      console.log('Form Data:', this.invoiceForm.value);
    } else {
      console.error('Form Invalid!');
    }
  }
  // Method to generate PDF from the form
  generatePDF() {
    const doc = new jsPDF();

    // Invoice Header
    doc.setFontSize(16);
    doc.text('Quotation', 105, 10, { align: 'center' });

    doc.setFontSize(10);
    doc.text(`Quotation No: ${this.invoiceForm.value.invoiceNo}`, 10, 20);
    doc.text(`Quotation Date: ${this.invoiceForm.value.invoiceDate}`, 10, 25);
    doc.text(`Due Date: ${this.invoiceForm.value.dueDate}`, 10, 30);

    // Billing Details
    doc.setFontSize(12);
    doc.text('Quotation From', 10, 40);
    doc.setFontSize(10);
    doc.text(`Name: ${this.business}`, 10, 45);
    doc.text(`Address: ${this.city}, ${this.country}`, 10, 50);

    doc.setFontSize(12);
    doc.text('Quotation For', 105, 40);
    doc.setFontSize(10);
    doc.text(`Name: ${this.businessname}`, 105, 45);
    doc.text(`Address: ${this.town}, ${this.count}`, 105, 50);

    // Shipping Details (if available)
    if (this.shipping) {
      // Shipping Details (if available)
      if (this.invoiceForm.get('shippingDetails')?.value) {
        const shippingDetails = this.invoiceForm.get('shippingDetails')?.value;
        doc.setFontSize(12);
        doc.text('Shipping Details', 10, 60);
        doc.setFontSize(10);

        const shippedFrom = shippingDetails.shippedFrom || {};
        const shippedTo = shippingDetails.shippedTo || {};

        // Shipped From
        doc.text('Shipped From:', 10, 65);
        doc.text(`Country: ${shippedFrom.country || 'Not Specified'}`, 10, 70);
        doc.text(
          `Address: ${shippedFrom.address || ''}, ${shippedFrom.city || ''}`,
          10,
          75
        );
        doc.text(
          `State: ${shippedFrom.state || ''}, Postal Code: ${
            shippedFrom.postalCode || ''
          }`,
          10,
          80
        );

        // Shipped To
        doc.text('Shipped To:', 105, 65);
        doc.text(`Country: ${shippedTo.country || 'Not Specified'}`, 105, 70);
        doc.text(
          `Address: ${shippedTo.address || ''}, ${shippedTo.city || ''}`,
          105,
          75
        );
        doc.text(
          `State: ${shippedTo.state || ''}, Postal Code: ${
            shippedTo.postalCode || ''
          }`,
          105,
          80
        );
      }
    }
    // Currency
    doc.setFontSize(12);
    doc.text(`Currency: ${this.curren}`, 10, 90);

    // Items Table
    let finalY = 100;
    const tableColumnWidth = doc.internal.pageSize.width - 20;

    if (this.igst) {
      autoTable(doc, {
        startY: finalY,
        head: [
          ['Items', 'Quantity', 'Rate', 'Amount', 'GST Rate', 'IGST', 'Total'],
        ],
        body: this.rowAdded.map((row) => [
          row.items,
          row.quantity,
          `${this.curren} ${row.rate}`,
          row.amount,
          `${row.gst}%`,
          `${this.curren} ${row.igst}`,
          `${this.curren} ${row.igstTotal}`,
        ]),
      });
      finalY = (doc as any).lastAutoTable?.finalY || finalY;
    } else if (this.cgst) {
      autoTable(doc, {
        startY: finalY,
        head: [
          [
            'Items',
            'Quantity',
            'Rate',
            'Amount',
            'GST Rate',
            'CGST',
            'SGST',
            'Total',
          ],
        ],
        body: this.rowAdded.map((row) => [
          row.items,
          row.quantity,
          `${this.curren} ${row.rate}`,
          row.amount,
          `${row.gst}%`,
          `${this.curren} ${row.cgstSgst}`,
          `${this.curren} ${row.cgstSgst}`,
          `${this.curren} ${row.cgstSgstTotal}`,
        ]),
      });
      finalY = (doc as any).lastAutoTable?.finalY || finalY;
    } else if (this.none) {
      autoTable(doc, {
        startY: finalY,
        head: [['Items', 'Quantity', 'Rate', 'Amount', 'Total']],
        body: this.nonGst.map((row) => [
          row.nonGst_items,
          row.nongst_quantity,
          `${this.curren} ${row.nongst_rate}`,
          `${this.curren} ${row.nongst_amount}`,
          `${this.curren} ${row.nongst_amount}`,
        ]),
      });
      finalY = (doc as any).lastAutoTable?.finalY || finalY;
    }

    // Total Amount
    const totalX = tableColumnWidth - 10; // Align with the table's last column
    doc.setFontSize(12);

    // Adjust X position of "Total:" to place it closer to the value
    doc.text('Total:', totalX - 13, finalY + 10); // Adjust X for the label
    doc.text(
      `${this.curren} ${this.none ? this.nonGstTotal : this.grandTotal}`,
      totalX,
      finalY + 10
    );

    // Terms and Conditions (with 1rem gap)
    const gap = 10; // Reduced gap between total and terms
    if (this.condition) {
      doc.setFontSize(12);
      doc.text('Terms and Conditions', 10, finalY + gap + 15); // Slightly reduced vertical position
      doc.setFontSize(10);
      doc.text('01 Applicable taxes will be extra', 10, finalY + gap + 20);
      doc.text(
        '02 Work will resume after advance payment.',
        10,
        finalY + gap + 25
      );
    }

    // Save the PDF
    doc.save('invoice.pdf');
  }
}
