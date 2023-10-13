import { Component, Input } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Carrots', 5),
    new Ingredient('Milk', 1),
    new Ingredient('Sugar', 1),
    new Ingredient('Cashews', 1)
  ]

  constructor(){}

  ngOnInit(){}
}
