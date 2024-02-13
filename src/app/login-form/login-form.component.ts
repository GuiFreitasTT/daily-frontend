import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/domain/models/user.model';
import { LoginService } from 'src/domain/services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

model: User = new User();

constructor(
  private router: Router, 
  private loginService: LoginService,
  private messageService: MessageService
  ) { }

  ngOnInit() {
    
  }
  
  login(){
    this.loginService.login(this.model).subscribe(
      data => {
        if(data && data.token) {
          localStorage.setItem('jwtToken', data.token);
          this.router.navigate(['/home']);
        }   
      },
      error => {
        this.messageService.add({severity:'error', summary: 'Erro', detail:'Usuário ou senha incorretos, tente novamente.'});
      }
    );
  }

}
