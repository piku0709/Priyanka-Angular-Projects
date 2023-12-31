import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
 constructor(
        private http: HttpClient, 
        private recipeService: RecipeService,
        private authService: AuthService
    ){}

 storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.http.put('https://ng-recipe-book-c43a9-default-rtdb.firebaseio.com/recipes.json', recipes)
    .subscribe(response => {
        console.log(response);
    });
 }

 fetchRecipes() { //chaining observables
    return this.authService.user.pipe(
        take(1), 
        exhaustMap(user => {
            return this.http.get<Recipe[]>(
                `https://ng-recipe-book-c43a9-default-rtdb.firebaseio.com/recipes.json`
            )
            .pipe(
                map(recipes => { //rxjs operator 'map'
                    return recipes.map( recipe => { //javascript 'map' method
                        return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []} //... is a spread operator to copy all recipe data
                    })
                }),
                tap(recipes => {
                    this.recipeService.setRecipes(recipes);
                })
            )
        }),
    );
 }

}