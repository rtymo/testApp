import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RecipeDetailsComponent } from "./recipe-details.component";
import { RecipeDetailsRoutingModule } from "./recipe-details-routing.module";
import { MaterialModule } from "src/app/material.module";

@NgModule({
  declarations: [RecipeDetailsComponent],
  imports: [CommonModule, RecipeDetailsRoutingModule, MaterialModule]
})
export class RecipeDetailsModule {}
