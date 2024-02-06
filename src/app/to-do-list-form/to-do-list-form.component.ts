import { Component, OnInit } from '@angular/core';
import { Task } from 'src/domain/models/task.model';

@Component({
  selector: 'app-to-do-list-form',
  templateUrl: './to-do-list-form.component.html',
  styleUrls: ['./to-do-list-form.component.css']
})
export class ToDoListFormComponent implements OnInit {

  model: Task;

  constructor() {
    this.model = new Task();  
   }

  ngOnInit() {
  }

}
