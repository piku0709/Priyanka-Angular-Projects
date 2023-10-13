import { Component, EventEmitter, Output } from '@angular/core'

@Component({
    selector:'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output("openRecipes") openRecipes = new EventEmitter<null>()
    @Output("openShoppingList") openShoppingList = new EventEmitter<null>()

    recipesClick(){
        this.openRecipes.emit()
    }

    shoppingListClick(){
        this.openShoppingList.emit()
    }
}