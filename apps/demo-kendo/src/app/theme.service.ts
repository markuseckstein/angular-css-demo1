import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly THEME_REF = 'mySuperThemeRef';

  constructor(@Inject(DOCUMENT) private readonly doc: Document) {}

  switchTheme(theme: 'light' | 'dark'): void {
    const rootNode = this.doc.getElementsByTagName('html')[0];
    this.removeLinkElementFromHead();

    if (theme === 'dark') {
      rootNode.classList.add('dark');
      rootNode.classList.remove('light');
      this.createLinkElementInHead('assets/kendo/blue-pink-dark.css');
    } else {
      rootNode.classList.add('light');
      rootNode.classList.remove('dark');
      this.createLinkElementInHead('assets/kendo/blue-pink-light.css');
    }
  }

  private removeLinkElementFromHead() {
    const currentKendoStylesheetLinkElement = this.doc.querySelector(
      `head > link#${this.THEME_REF}`
    );
    if (currentKendoStylesheetLinkElement) {
      currentKendoStylesheetLinkElement.parentElement?.removeChild(
        currentKendoStylesheetLinkElement
      );
    }
  }

  private createLinkElementInHead(href: string) {
    const newKendoThemeLink = this.doc.createElement('link');
    newKendoThemeLink.rel = 'stylesheet';
    newKendoThemeLink.id = this.THEME_REF;
    newKendoThemeLink.href = href;
    this.doc.getElementsByTagName('head')[0].prepend(newKendoThemeLink);
  }
}
