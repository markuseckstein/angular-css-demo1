import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'custom-button-b',
  templateUrl: './custom-button-b.component.html',
  styleUrls: ['./custom-button-b.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class CustomButtonBComponent {
  onButtonClick() {
    console.log('click');
  }
}
