import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() msgToParent = new EventEmitter<{
    recipes: boolean;
    shopList: boolean;
  }>();

  toRecipes() {
    this.msgToParent.emit({
      recipes: true,
      shopList: false,
    });
  }
  toShoppingList() {
    this.msgToParent.emit({
      recipes: false,
      shopList: true,
    });
  }
}
