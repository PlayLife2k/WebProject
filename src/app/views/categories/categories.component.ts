import { Category } from './../../Models/Category';
import { DataHandlerService } from './../../services/data-handler.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];
  selectedCategory: Category;

  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.dataHandler.categoriesSubject.subscribe(categories => this.categories = categories);
  }

  showTasksByCategory(category) {
    this.selectedCategory = category;
    this.dataHandler.fillTasksByCategory(category);
  }
}
