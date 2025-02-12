import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataSharingServiceService {
  private sharedDataKey = 'sharedData';
  private businessName = 'business';
  private userEmail = 'email';

  setBusinessName(businessName: string) {
    sessionStorage.setItem(this.businessName, businessName);
  }

  getBusinessName() {
    return sessionStorage.getItem(this.businessName) || '';
  }

  setUserEmail(userEmail: string) {
    localStorage.setItem(this.userEmail, userEmail);
  }

  getUserEmail() {
    return localStorage.getItem(this.userEmail) || '';
  }

  setData(data: string) {
    localStorage.setItem(this.sharedDataKey, data);
  }

  getData(): string {
    return localStorage.getItem(this.sharedDataKey) || '';
  }

  clearData() {
    localStorage.removeItem(this.sharedDataKey);
  }
}
