import { Priority } from './../Models/Priority';
import { Task } from './../Models/Task';
import { Category } from './../Models/Category';


export class TestData {

  static categories: Category[] = [
    {id: 1, title: 'Работа'},
    {id: 2, title: 'Семья'},
    {id: 3, title: 'Учеба'},
    {id: 4, title: 'Отдых'},
    {id: 5, title: 'Спорт'},
    {id: 6, title: 'Еда'},
    {id: 7, title: 'Финансы'},
    {id: 8, title: 'Гаджеты'},
    {id: 9, title: 'Здоровье'},
    {id: 10, title: 'Автомобиль'},
];


  static priorities: Priority[] = [
    {id: 1, title: 'Низкий', color: '#e5e5e5'},
    {id: 2, title: 'Средний', color: '#85d1b2'},
    {id: 3, title: 'Высокий', color: '#f1828d'},
    {id: 4, title: 'Срочно', color: '#f1128d'},
  ]

  static tasks: Task[] = [
    {
      id: 1,
      title: 'Залить бензин, полный бак',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[1],
      date: new Date('2019-04-10'),
    },

    {
      id: 2,
      title: 'Передать отчеты нач управ',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[0],
      date: new Date('2019-04-11'),
    },

    {
      id: 3,
      title: 'Убраться в комнате, полить растения',
      priority: TestData.priorities[2],
      completed: true,
      category: TestData.categories[1],
      date: new Date('2019-04-12'),
    },

    {
      id: 4,
      title: 'Залить бензин, полный бак',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[1],
      date: new Date('2019-04-10'),
    },

    {
      id: 5,
      title: 'Передать отчеты нач управ',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[0],
      date: new Date('2019-04-11'),
    },

    {
      id: 6,
      title: 'Убраться в комнате, полить растения',
      priority: TestData.priorities[2],
      completed: true,
      category: TestData.categories[1],
      date: new Date('2019-04-12'),
    },

    {
      id: 7,
      title: 'Залить бензин, полный бак',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[1],
      date: new Date('2019-04-10'),
    },

    {
      id: 8,
      title: 'Передать отчеты нач управ',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[0],
      date: new Date('2019-04-11'),
    },

    {
      id: 9,
      title: 'Убраться в комнате, полить растения',
      priority: TestData.priorities[2],
      completed: true,
      category: TestData.categories[1],
      date: new Date('2019-04-12'),
    },

    {
      id: 10,
      title: 'Залить бензин, полный бак',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[1],
      date: new Date('2019-04-10'),
    },

    {
      id: 12,
      title: 'Передать отчеты нач управ',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[0],
      date: new Date('2019-04-11'),
    },

    {
      id: 13,
      title: 'Убраться в комнате, полить растения',
      priority: TestData.priorities[2],
      completed: true,
      category: TestData.categories[1],
      date: new Date('2019-04-12'),
    },


  ]
}






