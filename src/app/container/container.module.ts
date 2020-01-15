import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material.module";
import { ContainerRoutingModule } from "./container-routing.module";
import { MainComponent } from "./main/main.component";
import { RecipeDetailsModule } from './main/recipe-details/recipe-details.module';
import { SharedService, PagerService } from '../shared';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MaterialModule, ContainerRoutingModule, RecipeDetailsModule],
  providers: [SharedService, PagerService]
})
export class ContainerModule {}
