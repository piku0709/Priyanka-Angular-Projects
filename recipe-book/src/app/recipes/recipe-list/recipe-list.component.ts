import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Indian_Recipes_Gajar_Ka_Halwa_A_Dessert_Recipe_from_Indian_Recipes_By_Sonia_Goyal.jpg'),
    new Recipe('A Test recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Indian_Recipes_Gajar_Ka_Halwa_A_Dessert_Recipe_from_Indian_Recipes_By_Sonia_Goyal.jpg')
  ]

  constructor(){  }

  ngOnInit(){  }
}
