import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomButtonAComponent } from './custom-button-a/custom-button-a.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { CustomButtonBComponent } from './custom-button-b/custom-button-b.component';

@NgModule({
  declarations: [AppComponent, CustomButtonAComponent, CustomButtonBComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    DropDownsModule,
    GridModule,
    BrowserAnimationsModule,
    ButtonsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
