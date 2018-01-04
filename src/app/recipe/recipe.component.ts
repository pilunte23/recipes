import { Component, OnInit } from '@angular/core';
import {Recipe} from '../model/recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipe: Recipe = {
    name: 'nom de recette',
    type: 'type',
    ingredient: 'ingredient',
    magazine: 'magazine',
    page: 'page'
  };
  constructor() { }

  ngOnInit() {
  }

}
