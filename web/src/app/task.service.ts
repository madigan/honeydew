import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks:Task[];

  constructor( ) {
    this.tasks = [
      new Task("123", "My first task", "Clearly the most important thing."),
      new Task("456", "My second task", "A slightly less important thing."),
      new Task("789", "My third task", "I'm sure this one is important too.")
    ];
  }

  /**
   *  Returns the list of tasks managed by the service.
   */
  getTasks():Task[] {
    return this.tasks;
  }
}
