import { Component } from '@angular/core';
import { CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

// Importamos el modelo Itaks
import { Itask, LEVELS } from 'src/app/models/tasks.interface';

@Component({
  selector: 'app-kaban-tasks',
  templateUrl: './kaban-tasks.component.html',
  styleUrls: ['./kaban-tasks.component.scss'],
})
export class KabanTasksComponent {
/*
[x: number]: string|CdkDropList<any>|(string|CdkDropList<any>)[];*/
doneList: any|CdkDropList<any>|(string|CdkDropList<any>)[];
todoList: any|CdkDropList<any>|(string|CdkDropList<any>)[];

  todoTasks: Itask[] = [
    {
      id: 0,
      title: 'Animaciones',
      description: 'Aprender animaciones en Angular',
      completed: false,
      level: LEVELS.INFO
    },
    {
      id: 1,
      title: 'Angular Cli',
      description: 'Comandos y configuraciones en Angular',
      completed: false,
      level: LEVELS.URGENT

    },
    {
      id: 2,
      title: 'Build',
      description: 'Aprender a generar Build con Angular Cli',
      completed: false,
      level: LEVELS.BLOCKING
    },
    {
      id: 3,
      title: 'Deploy',
      description: 'Aprender a desplegar bundles en Angular Cli',
      completed: false,
      level: LEVELS.BLOCKING

    }
  ]


  doneTasks: Itask[] = [
    {
      id: 0,
      title: 'VS-Code',
      description: 'Configurar e instalar Plugins en VS-CODE',
      completed: true,
      level: LEVELS.BLOCKING

    },
    {
      id: 1,
      title: 'Instalar Angular',
      description: 'Instalar con npm el Angular Cli',
      completed: true,
      level: LEVELS.BLOCKING

    },
    {
      id: 2,
      title: 'Hola mundo',
      description: 'Crear con Angular Cli proyecto inicial',
      completed: true,
      level: LEVELS.URGENT
    },
    {
      id: 3,
      title: 'Componentes',
      description: 'Aprender a gestionar componentes en Angular',
      completed: true,
      level: LEVELS.BLOCKING
    },
    {
      id: 4,
      title: 'Servicios',
      description: 'Aprender a gestionar servicios en Angular',
      completed: true,
      level: LEVELS.URGENT
    },
    {
      id: 5,
      title: 'Angular Material',
      description: 'Aprender a gestionar Angular Material y sus Schematics',
      completed: true,
      level: LEVELS.URGENT
    }
  ]

  drop(event: CdkDragDrop<Itask[]>): void {
    if (event.previousContainer === event.container) {
      console.log('MISMA COLUMNA :', event.container.data);
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log('ENTRE COLUMNAS :', event.container.data);
      console.log('Debemos cambiar el estado de las task');

      event.previousContainer.data[event.previousIndex].completed = !event.previousContainer.data[event.previousIndex].completed;

      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
