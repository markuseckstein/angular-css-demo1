import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'angular-css-demo1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(@Inject(DOCUMENT) private readonly doc: Document) {}

  switchTheme(theme: 'light' | 'dark'): void {
    const rootNode = this.doc.getElementsByTagName('html')[0];
    if (theme === 'dark') {
      rootNode.classList.add('dark');
      rootNode.classList.remove('light');
    } else {
      rootNode.classList.add('light');
      rootNode.classList.remove('dark');
    }
  }
}
