import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'angular-css-demo1-shadow-dom-encapsulated',
  templateUrl: './shadow-dom-encapsulated.component.html',
  styleUrls: ['./shadow-dom-encapsulated.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ShadowDomEncapsulatedComponent {}
