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

  todoTasks: Itask[] = [
    {
      title: 'Animaciones',
      description: 'Aprender animaciones en Angular',
      completed: false,
      level: LEVELS.INFO
    },
    {
      title: 'Angular Cli',
      description: 'Comandos y configuraciones en Angular',
      completed: false,
      level: LEVELS.URGENT

    },
    {
      title: 'Build',
      description: 'Aprender a generar Build con Angular Cli',
      completed: false,
      level: LEVELS.BLOCKING
    },
    {
      title: 'Deploy',
      description: 'Aprender a desplegar bundles en Angular Cli',
      completed: false,
      level: LEVELS.BLOCKING

    }
  ]


  doneTasks: Itask[] = [
    {
      title: 'VS-Code',
      description: 'Configurar e instalar Plugins en VS-CODE',
      completed: true,
      level: LEVELS.BLOCKING

    },
    {
      title: 'Instalar Angular',
      description: 'Instalar con npm el Angular Cli',
      completed: true,
      level: LEVELS.BLOCKING

    },
    {
      title: 'Hola mundo',
      description: 'Crear con Angular Cli proyecto inicial',
      completed: true,
      level: LEVELS.URGENT
    },
    {
      title: 'Componentes',
      description: 'Aprender a gestionar componentes en Angular',
      completed: true,
      level: LEVELS.BLOCKING
    },
    {
      title: 'Servicios',
      description: 'Aprender a gestionar servicios en Angular',
      completed: true,
      level: LEVELS.URGENT
    },
    {
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
