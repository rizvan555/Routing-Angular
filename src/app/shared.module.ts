import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [BrowserModule, RouterModule, FormsModule],
})
export class SharedModule {}
