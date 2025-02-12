import { Component, inject, OnInit } from '@angular/core';
import { DataSharingServiceService } from '../data-sharing-service.service';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.css',
})
export class UserMenuComponent implements OnInit {
  private dataSharingService = inject(DataSharingServiceService);
  email = '';
  name = '';
  ngOnInit(): void {
    this.email = this.dataSharingService.getUserEmail();
    this.name = this.dataSharingService.getData();
  }
}
