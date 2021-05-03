import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'custom-button-a',
  templateUrl: './custom-button-a.component.html',
  styleUrls: ['./custom-button-a.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class CustomButtonAComponent {
  onButtonClick() {
    console.log('click');
  }
}
