import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, C1Component, C2Component, C3Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'c1',
        component: C1Component,
      },
      {
        path: 'c2',
        component: C2Component,
      },
      {
        path: 'c3',
        component: C3Component,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
