import { Component, OnInit } from '@angular/core';
import {DataHandlerService} from '../../services/data-handler.service';
import {Task} from '../../Models/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})

export class TasksComponent implements OnInit {

  tasks: Task[];

  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit() {
    this.dataHandler.tasksSubject.subscribe(tasks => this.tasks = tasks);
  }

  getTasks() {
    this.dataHandler.tasksSubject.subscribe(tasks => this.tasks = tasks);
  }

}





