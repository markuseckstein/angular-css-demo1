import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoneEncapsulatedComponent } from './none-encapsulated/none-encapsulated.component';
import { EmulatedEncapsulatedComponent } from './emulated-encapsulated/emulated-encapsulated.component';
import { ShadowDomEncapsulatedComponent } from './shadow-dom-encapsulated/shadow-dom-encapsulated.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  declarations: [AppComponent, NoneEncapsulatedComponent, EmulatedEncapsulatedComponent, ShadowDomEncapsulatedComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
