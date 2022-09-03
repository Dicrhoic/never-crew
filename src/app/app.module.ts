import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NavBodyComponent } from './nav-body/nav-body.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    NavMenuComponent,
    NavBodyComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
