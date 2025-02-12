import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AfterRegistrationComponent } from './after-registration/after-registration.component';
import { BusinessFormComponent } from './business-form/business-form.component';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';
import { InvoiceAppComponent } from './invoice-app/invoice-app.component';
import { QuotationFormComponent } from './quotation-form/quotation-form.component';
import { QuotationComponent } from './side-bar/quotation/quotation.component';
import { InvoiceComponent } from './side-bar/invoice/invoice.component';
import { ReportComponent } from './user-menu/report/report.component';
import { ReportBugComponent } from './user-menu/report/report-bug/report-bug.component';
import { ReportFeatureComponent } from './user-menu/report/report-feature/report-feature.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
    data: { fullscreen: true },
  },
  {
    path: 'app',
    component: InvoiceAppComponent,
    data: { fullscreen: true },
    children: [
      {
        path: '',
        component: AfterRegistrationComponent,
      },
      {
        path: 'invoice-form',
        loadComponent: () => import('./invoice-form/invoice-form.component').then(m => m.InvoiceFormComponent),
      },
      {
        path: 'quotation-form',
        loadComponent: () => import('./quotation-form/quotation-form.component').then(m => m.QuotationFormComponent),
      },
      {
        path: 'quotation',
        component: QuotationComponent,
      },
      {
        path: 'invoice',
        component: InvoiceComponent,
      },
    ],
  },

  {
    path: 'businesses',
    component: BusinessFormComponent,
    data: { fullscreen: true },
  },
  {
    path: 'report',
    component: ReportComponent,
    data: { fullscreen: true },
    children: [
      {
        path: '',
        redirectTo: 'features', // Default route redirects to 'features'
        pathMatch: 'full',
      },
      {
        path: 'features',
        component: ReportFeatureComponent,
      },
      {
        path: 'bugs',
        component: ReportBugComponent,
      },
    ],
  },
  {
    path:'pricing',
    component:PricingComponent,
    data: { fullscreen: true }
  },
  {
    path:'contact',
    component:ContactFormComponent,
    data: { fullscreen: true }
  },
  {
    path:'blog',
    component:BlogComponent,
    data: { fullscreen: true }
  }
];
