import { Component, EventEmitter, inject, input, Output } from '@angular/core';
import type { Category, CategoryName } from '../../../../layout/navbar/category/category.model';
import { CategoryService } from '../../../../layout/navbar/category/category.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-category-step',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './category-step.component.html',
  styleUrl: './category-step.component.scss'
})
export class CategoryStepComponent {

  categoryName = input.required<CategoryName>();

  @Output()
  categoryChange = new EventEmitter<CategoryName>();

  @Output()
  stepValidityChange = new EventEmitter<boolean>();

  categoryService = inject(CategoryService);

  categories:Category[] | undefined;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.categories = this.categoryService.getCategories();
  }

  onSelectCategory(newCategory: CategoryName): void{
    this.categoryChange.emit(newCategory);
    this.stepValidityChange.emit(true);
  }

}
