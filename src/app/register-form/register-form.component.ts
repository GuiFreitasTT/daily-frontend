import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/domain/models/user.model';
import { LoginService } from 'src/domain/services/login.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  form: FormGroup | null = null;
  model: User = new User();
  messageRequired: boolean = false;

  constructor(
    private router: Router, 
    private loginService: LoginService,
    private messageService: MessageService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  
  register(){
    if(this.form?.get('password')?.value?.length <= 4){
      this.messageRequired = true;
      return false;
    }
    this.loginService.register(this.model).subscribe(
      data => {
        this.messageService.add({severity:'success', summary: 'Sucesso', detail:'Usuário registrado com sucesso, faça login para continuar.'});
        this.router.navigate(['/login']);
      },
      error => {
        this.messageService.add({severity:'error', summary: 'Erro', detail:'Não foi possível registrar o usuário, verifique as credenciais de login e tente novamente.'});
      }
    );
  }

}
