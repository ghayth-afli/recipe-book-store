import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'recipe-book-store';
  shopList: boolean = false;
  recipes: boolean = true;
  navigateTo(msg) {
    this.shopList = msg.shopList;
    this.recipes = msg.recipes;
  }
}
