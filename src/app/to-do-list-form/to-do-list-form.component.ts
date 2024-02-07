import { Component, OnInit } from '@angular/core';
import { Task } from 'src/domain/models/task.model';
import { TodoListService } from 'src/domain/services/to-do-list.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'list-form',
  templateUrl: './to-do-list-form.component.html',
  styleUrls: ['./to-do-list-form.component.css']
})
export class ToDoListFormComponent implements OnInit {

  model: Task;

  constructor(private todoListService: TodoListService, private messageService: MessageService) {
    this.model = new Task();  
   }

  ngOnInit() {
  }

  save(model: Task){
    this.todoListService.saveTask(model).subscribe(
      response => {
        this.messageService.add({severity:'success', summary: 'Sucesso', detail:'Registro salvo com sucesso'});
        this.model = new Task();
      },
      error => {
        this.messageService.add({severity:'error', summary: 'Erro', detail:'Erro ao salvar a tarefa, tente novamente mais tarde'});
      }
    );
  }

}
