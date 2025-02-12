import { Component, inject, Input, OnInit, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataSharingServiceService } from '../data-sharing-service.service';
import { ScrollAnimationDirective } from '../directives/scroll-animation.directive';

@Component({
  selector: 'app-after-registration',
  standalone: true,
  imports: [RouterLink, ScrollAnimationDirective],
  templateUrl: './after-registration.component.html',
  styleUrl: './after-registration.component.css',
})
export class AfterRegistrationComponent implements OnInit {
  @Input() business!: string;
  private dataSharingService = inject(DataSharingServiceService);

  moveInvoice = output<boolean>();
  invoiceClick: boolean = false;
  invoice() {
    this.invoiceClick = true;
    this.moveInvoice.emit(this.invoiceClick);
  }

  quotationClick: boolean = false;
  quotation() {
    this.quotationClick = true;
    this.moveInvoice.emit(this.quotationClick);
  }

  namereceived = '';
  businessName = '';
  ngOnInit(): void {
    this.namereceived = this.dataSharingService.getData();
    this.businessName = this.dataSharingService.getBusinessName();
  }
}
