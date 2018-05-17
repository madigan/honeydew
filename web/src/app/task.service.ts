import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  /**
   *  Returns a task based on its ID.
   *  @param id The UUID of the task.
   */
  getTask(id:string) {
    return new Task(id, "My First Task", "Implement this service.");
  }
}
