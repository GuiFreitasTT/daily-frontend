import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/domain/models/task.model';
import { TodoListService } from 'src/domain/services/to-do-list.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'list-form',
  templateUrl: './to-do-list-form.component.html',
  styleUrls: ['./to-do-list-form.component.css']
})
export class ToDoListFormComponent implements OnInit {
  @Input() task!: Task; 
  @Output() formSave = new EventEmitter<void>();

  constructor(private todoListService: TodoListService, private messageService: MessageService) {
    this.task = new Task(); 
   }

  ngOnInit() {
      
  }

  save(task: Task){
    if(!task.description || !task.title){
      this.messageService.add({severity:'warn', summary: 'Aviso', detail:'Campo de titulo e descrição são obrigatórios'});
      return
    }
    var id = task.id;
    if (id !== undefined) {
      this.todoListService.updateTask(task, id).subscribe(
        response => {
          this.messageService.add({severity:'success', summary: 'Sucesso', detail:'Registro atualizado com sucesso'});
          this.task = new Task();
          this.formSave.emit();
        },
        error => {
          this.messageService.add({severity:'error', summary: 'Erro', detail:'Erro ao atualizar a tarefa, tente novamente mais tarde'});
        }
      );
    }else{
      this.todoListService.saveTask(task).subscribe(
        response => {
          this.messageService.add({severity:'success', summary: 'Sucesso', detail:'Registro salvo com sucesso'});
          this.task = new Task();
          this.formSave.emit();
        },
        error => {
          this.messageService.add({severity:'error', summary: 'Erro', detail:'Erro ao salvar a tarefa, tente novamente mais tarde'});
        }
      );
    }
  }

}
