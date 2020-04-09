import { Category } from './../Models/Category';
import { Injectable } from '@angular/core';
import { TestData } from '../Data/TestData';
import {Task} from '../Models/Task';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  tasksSubject = new BehaviorSubject<Task[]>(TestData.tasks);
  categoriesSubject = new BehaviorSubject<Category[]>(TestData.categories);

  constructor() { this.fillTasks(); }

  // getCategories(): Category[] {
  //   return TestData.categories;
  // }

  fillTasks() {
    this.tasksSubject.next(TestData.tasks);
  }

  fillTasksByCategory(category: Category) {
    const tasks = TestData.tasks.filter(task => task.category === category);
    this.tasksSubject.next(tasks);
  }

}
