import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>()
    
    private recipes: Recipe[] = [
        new Recipe(
            'Carrot halwa', 
            'Sweet dish of carrots', 
            'https://upload.wikimedia.org/wikipedia/commons/0/0d/Indian_Recipes_Gajar_Ka_Halwa_A_Dessert_Recipe_from_Indian_Recipes_By_Sonia_Goyal.jpg',
            [
                new Ingredient('Carrots', 5),
                new Ingredient('Milk', 1),
                new Ingredient('Sugar', 1),
                new Ingredient('Cashews', 1)
            ]),
        new Recipe(
            'Kheer', 
            'Sweet dish of tapioca pearl(sago/sabudana) and milk', 
            'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/sabudana-kheer-recipe.jpg',
            [
                new Ingredient('tapioca pearl', 100),
                new Ingredient('Milk', 1),
                new Ingredient('Sugar', 1),
                new Ingredient('Cashews', 1)
            ])
    ]

    constructor(private shoppingListService: ShoppingListService){}

    getRecipes(): Recipe[] {
        return this.recipes.slice() //returns a new array wich is copy of the array here, this way no changes can be done from outside
    }

    getRecipe(index: number): Recipe {
        return this.recipes[index] 
    }

    addIngredientsToShoppingList(ingredients: Ingredient[] ) {
        this.shoppingListService.addIngredients(ingredients)
    }



}