import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Task } from 'src/domain/models/task.model';
import { TodoListService } from 'src/domain/services/to-do-list.service';

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.css']
})
export class HomeFormComponent implements OnInit {
  menuItems: any[];
  visible: boolean = false;
  isEdit: boolean = false;
  deleted: boolean = false;
  tasks: any;
  selectedTask!: Task;
  selectedTaskForDelete!: Task;

  constructor(private todoListService: TodoListService, private messageService: MessageService) {
    this.menuItems = [
      {
        label: 'Criar nova tarefa',
        icon: 'pi pi-fw pi-plus',
        command: () => this.openModal()
    },
    ];
   }

   ngOnInit() {   
    this.loadTasks(); 
  }

   loadTasks() {
    this.todoListService.listAll().subscribe(
      (tasks: Task[]) => {
        this.tasks = tasks;
      },
      error => {
        console.error('Erro ao buscar as tarefas:', error);
      }
    );
  }

  openModal(){
    this.visible = true;
  }

  closeModal(){
    this.visible = false;
    this.isEdit = false;
  }

  edit(task: Task){
    this.selectedTask = {...task};
    this.isEdit = true;
  }

  delete(task: Task){
    this.deleted = true;
    if(task.id !== undefined){
      this.todoListService.delete(task.id).subscribe(
        response => {
          this.messageService.add({severity:'success', summary: 'Sucesso', detail:'Registro excluído com sucesso'});
          this.loadTasks();
        },
        error => {
          this.messageService.add({severity:'error', summary: 'Erro', detail:'Erro ao excluir a tarefa, tente novamente mais tarde'});
        }
      );
    }
  }
}
