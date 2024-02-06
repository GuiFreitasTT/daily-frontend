import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';

import { LoginFormComponent } from './login-form/login-form.component';
import { HomeFormComponent } from './home-form/home-form.component';
import { ToDoListFormComponent } from './to-do-list-form/to-do-list-form.component';

@NgModule({
  declarations: [			
      AppComponent,
      LoginFormComponent,
      HomeFormComponent,
      ToDoListFormComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    CommonModule,
    RouterModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    MenubarModule,
    BrowserAnimationsModule,
    PanelModule,
    InputTextareaModule,
    ReactiveFormsModule,
    CardModule,
    DialogModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
