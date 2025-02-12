import { NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-column',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-column.component.html',
  styleUrls: ['./add-column.component.css'],
})
export class AddColumnComponent {
  // Input and Output properties
  @Input() taxRow: {
    igstTax: string;
    cgstTax: string;
    none: string;
  } = { igstTax: '', cgstTax: '', none: '' };

  @Output() addTaxs = new EventEmitter<{
    igst: number;
    cgstSgst: number;
    igstTotal: number;
    cgstSgstTotal: number;
    total: number;
  }>();

  @Output() save = new EventEmitter<void>();
  @Output() addGstRows = new EventEmitter<{
    id: number;
    items: string;
    quantity: string;
    rate: string;
    amount: string;
    gst: string;
    igst: number;
    cgstSgst: number;
    igstTotal: number;
    cgstSgstTotal: number; // Total of both CGST and SGST
    total: number;
  }>();

  @Output() addNoGstRows = new EventEmitter<{
    nonGst_items: string;
    nongst_quantity: string;
    nongst_rate: string;
    nongst_amount: string;
  }>();
  // Form fields
  items = '';
  quantity = '';
  rate = '';
  amount = '';
  gst = '';

  // Tax calculation variables
  igst: number = 0;
  cgstSgst: number = 0;
  igstTotal: number = 0;
  cgstSgstTotal: number = 0;

  // Non-GST fields
  nonGst_items = '';
  nongst_quantity = '';
  nongst_rate = '';
  nongst_amount = '';

  nonGstTotal: number = 0;

  onSubmit() {
    // Check if values for the GST form are filled

    if (
      this.items.trim() &&
      this.quantity.trim() &&
      this.rate.trim() &&
      this.gst.trim()
    ) {
      const rowAmount = +this.quantity * +this.rate; // Dynamically calculate the amount
      const gstRate = +this.gst;
      const igstValue = +((gstRate / 100) * rowAmount).toFixed(2); // Calculate IGST
      const cgstSgstValue = +(igstValue / 2).toFixed(2); // CGST and SGST share the IGST value equally
      const totalValue = rowAmount + igstValue; // Calculate total value
      const cgstTotalValue = rowAmount + cgstSgstValue * 2;
      // Prepare the data object to emit
      const rowData = {
        id: new Date().getTime(),
        items: this.items,
        quantity: this.quantity,
        rate: this.rate,
        amount: rowAmount.toString(), // Convert the number to a string
        gst: this.gst,
        igst: igstValue,
        cgstSgst: cgstSgstValue,
        igstTotal: totalValue,
        cgstSgstTotal: cgstTotalValue, // Total of both CGST and SGST
        total: totalValue,
      };

      this.addGstRows.emit(rowData); // Emit the row data

      // Emit the calculated taxes

      // Reset input fields for GST and tax-related values
      this.resetGstFields();
    }

    // Check if values for the Non-GST form are filled
    else if (
      this.nonGst_items.trim() &&
      this.nongst_quantity.trim() &&
      this.nongst_rate.trim()
    ) {
      // Calculate the Non-GST amount
      const nonGstAmount = +this.nongst_quantity * +this.nongst_rate;

      // Prepare the row data object
      const rowData = {
        nonGst_items: this.nonGst_items,
        nongst_quantity: this.nongst_quantity,
        nongst_rate: this.nongst_rate,
        nongst_amount: nonGstAmount.toString(), // Convert to string
      };

      // Emit Non-GST row data
      console.log(this.nonGst_items);
      this.addNoGstRows.emit(rowData);

      // Reset input fields for Non-GST and related values
      this.resetNonGstFields();
    }

    // Reset all calculated values
    this.resetCalculatedValues();

    // Emit save event
    this.save.emit();
  }

  // Utility method to reset GST-related fields and calculations
  private resetGstFields() {
    this.items = '';
    this.quantity = '';
    this.rate = '';
    this.gst = '';
    (this.igst = 0), (this.cgstSgst = 0);
    this.igstTotal = 0;
    this.cgstSgstTotal = 0; // Total of both CGST and SGST
  }

  // Utility method to reset Non-GST-related fields and calculation
  private resetNonGstFields() {
    this.nonGst_items = '';
    this.nongst_quantity = '';
    this.nongst_rate = '';
    this.nongst_amount = '';
  }

  // Utility method to reset all calculated values
  private resetCalculatedValues() {
    this.nonGstTotal = 0;
  }
}
