import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  constructor(private http: HttpClient) {}
  getRecipeById(id: number) {
    const recipeDetails = JSON.parse(localStorage.getItem('recipes'));
    return recipeDetails.find(recipe => recipe.id === id.toString())
  }

  getRecipes() {
    return this.http.get("/assets/dummy-data.json");
  }
}
