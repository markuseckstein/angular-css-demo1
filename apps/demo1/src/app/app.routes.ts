import { Routes } from '@angular/router';
import { EmulatedEncapsulatedComponent } from './emulated-encapsulated/emulated-encapsulated.component';
import { NoneEncapsulatedComponent } from './none-encapsulated/none-encapsulated.component';
import { ShadowDomEncapsulatedComponent } from './shadow-dom-encapsulated/shadow-dom-encapsulated.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'emulated-encapsulation',
  },
  {
    path: 'none-encapsulation',
    component: NoneEncapsulatedComponent,
  },
  {
    path: 'shadow-dom-encapsulation',
    component: ShadowDomEncapsulatedComponent,
  },
  {
    path: 'emulated-encapsulation',
    component: EmulatedEncapsulatedComponent,
  },
];
