import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy{
  ingredients: Ingredient[] = []
  private shoppingListService: ShoppingListService
  private subscription = new Subscription();

  constructor(private loggingService: LoggingService){
    this.shoppingListService= inject(ShoppingListService)
  }

  ngOnInit(){
    this.ingredients = this.shoppingListService.getIngredients()
    this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients
      }
    )
    this.loggingService.printLog("Hello from ShoppingListComponent ngOnInit");
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    //throw new Error('Method not implemented.');
  }
}
