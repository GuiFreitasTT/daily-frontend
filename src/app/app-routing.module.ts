import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginFormComponent } from './login-form/login-form.component';
import { HomeFormComponent } from './home-form/home-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AuthGuard } from 'src/domain/services/auth-guard.service';

const routes: Routes = [
  {path: 'home', component: HomeFormComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterFormComponent},
  {path: 'login', component: LoginFormComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
