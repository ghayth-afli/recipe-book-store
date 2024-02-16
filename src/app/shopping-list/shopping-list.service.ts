import { EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

export class ShoppingListService {
  public addedIngredients = new EventEmitter<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 20),
  ];
  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.addedIngredients.emit(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.addedIngredients.emit(this.ingredients.slice());
  }

  constructor() {}
}
