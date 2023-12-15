import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Recipe } from "./recipe.model";
import { Observable } from "rxjs";
import { DataStorageService } from "../shared/data-storage-service";
import { RecipeService } from "./recipe.service";

@Injectable({providedIn: 'root'})
export class RecipeResolverService implements Resolve<Recipe[]>{
    constructor(
        private dataStorageService: DataStorageService, 
        private recipeService: RecipeService){}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
        const recipes = this.recipeService.getRecipes();
        if(recipes.length === 0) {
            return this.dataStorageService.fetchRecipes(); //angular resolver will subscribe here to find out if data is present
        } else {
            return recipes;
        }
        
        //throw new Error("Method not implemented.");
    }

}