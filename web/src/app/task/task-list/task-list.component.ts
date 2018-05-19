import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { Task } from '../../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {
  private tasks:Task[];

  constructor(
    private taskService:TaskService
  ) { }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }
}
