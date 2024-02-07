import { Component, OnInit } from '@angular/core';
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
  tasks: any;

  constructor(private todoListService: TodoListService) {
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

  openModal(){
    this.visible = true;
  }

  closeModal(){
    this.visible = false;
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
}
