import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoryService } from './category.service';
import type { Category } from './category.model';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  categoryService = inject(CategoryService);
  categories: Category[] | undefined;

  currentActivateCategory = this.categoryService.getCategoryByDefault();
  ngOnInit():void{
    this.fetchCategories()
  }

  private fetchCategories(){
    this.categories=this.categoryService.getCategories();
  }
}
