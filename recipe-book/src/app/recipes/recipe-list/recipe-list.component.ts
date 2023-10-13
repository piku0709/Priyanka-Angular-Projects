import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Carrot halwa', 'Sweet dish made out of carrots', 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Indian_Recipes_Gajar_Ka_Halwa_A_Dessert_Recipe_from_Indian_Recipes_By_Sonia_Goyal.jpg'),
    new Recipe('Kheer', 'Sweet dish made out of tapioca pearl(sago/sabudana) and milk', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/sabudana-kheer-recipe.jpg')
  ]

  @Output()
  recipeWasSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>()

  constructor(){  }

  ngOnInit(){  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }
}
