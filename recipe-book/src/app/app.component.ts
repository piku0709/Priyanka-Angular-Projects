import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-book';

  navigateToRecipes: boolean = false
  openRecipes() {
    this.navigateToRecipes = true
    this.navigateToShoppingList = false
  }

  navigateToShoppingList: boolean = false
  openShoppingList() {
    this.navigateToShoppingList = true
    this.navigateToRecipes = false
  }

  loadedFeature = 'recipes'
  onNavigate(feature: string) {
    this.loadedFeature = feature
  }
}
