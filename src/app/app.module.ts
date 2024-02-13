import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TooltipModule } from 'primeng/tooltip';

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
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';

import { LoginFormComponent } from './login-form/login-form.component';
import { HomeFormComponent } from './home-form/home-form.component';
import { ToDoListFormComponent } from './to-do-list-form/to-do-list-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';

@NgModule({
  declarations: [				
      AppComponent,
      LoginFormComponent,
      HomeFormComponent,
      ToDoListFormComponent,
      RegisterFormComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    DialogModule,
    HttpClientModule,
    MessagesModule,
    ToastModule,
    TooltipModule,
    ReactiveFormsModule
    
  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
