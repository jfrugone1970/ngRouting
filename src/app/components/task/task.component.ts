import { Component, Input ,OnInit } from '@angular/core';
import { Itask, LEVELS } from 'src/app/models/tasks.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: Itask = {
    title: 'Titulo por defecto',
    description: 'Descripcion por defecto',
    level: LEVELS.INFO,
    completed: false
  }

  constructor() {}

  ngOnInit(): void {

  }

}
