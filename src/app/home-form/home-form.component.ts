import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.css']
})
export class HomeFormComponent implements OnInit {
  menuItems: any[];
  visible: boolean = false;

  constructor() {
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
  }

  openModal(){
    this.visible = true;
  }
}
