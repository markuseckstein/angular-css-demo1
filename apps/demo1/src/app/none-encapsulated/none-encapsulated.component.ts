import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'angular-css-demo1-none-encapsulated',
  templateUrl: './none-encapsulated.component.html',
  styleUrls: ['./none-encapsulated.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NoneEncapsulatedComponent {}
