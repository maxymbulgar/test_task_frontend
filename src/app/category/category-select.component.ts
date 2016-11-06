import { Component, OnInit } from '@angular/core';

import { Category } from './category';
import { CategoryService } from './category.service';

@Component({
  moduleId: module.id,
  selector: 'category-select',
  templateUrl: './category-select.component.html'
})

export class CategoryComponent implements OnInit {
  errorMessage: string;
  categories: Promise<Category[]>;

  constructor(private _categoryService: CategoryService ) {}

  getCategories(): void {
    this.categories = this._categoryService.getCategories();
  }

  ngOnInit(): void {
    this.getCategories();
  }
}
