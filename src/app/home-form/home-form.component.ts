import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
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
  tasks: any;
  selectedTask!: Task;

  constructor(private todoListService: TodoListService, private confirmationService: ConfirmationService) {
    this.menuItems = [
      {
        label: 'Tarefas',
        items: [
            {
                label: 'Criar nova tarefa',
                icon: 'pi pi-fw pi-plus',
                command: () => this.openModal()
            },
        ]
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
    this.selectedTask = task;
    this.isEdit = true;
  }
}
