import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  RouterOutlet } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes'; // Import your AppRoutingModule
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    // ... other components, directives, or pipes
  ],
  imports: [
    BrowserModule,
    // RouterModule, // You may need to import RouterModule if not already imported
    AppRoutingModule, // Add your AppRoutingModule here
    NxWelcomeComponent,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}