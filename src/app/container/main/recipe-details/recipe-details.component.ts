import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { SharedService } from "src/app/shared";
import { Recipe } from "../../../shared/models/recipe.interface";

@Component({
  selector: "app-recipe-details",
  templateUrl: "./recipe-details.component.html",
  styleUrls: ["./recipe-details.component.css"]
})
export class RecipeDetailsComponent implements OnInit {
  todoId: string;
  todoDetail: Recipe[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: SharedService
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.todoId = params["id"];
      if (this.todoId !== undefined) {
        this.getRecipeDetailById(this.todoId);
      } else {
        this.todoDetail["id"] = 0;
      }
    });
  }

  getRecipeDetailById(id) {
    this.todoDetail = this.service.getRecipeById(parseInt(id));
  }

  onClickBack() {
    this.router.navigate(["recipes"]);
  }
}
