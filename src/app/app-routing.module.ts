import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: 'recipes', loadChildren: () => import('./container/container.module').then(m => m.ContainerModule) },
  { path: 'details', loadChildren: () => import('./container/main/recipe-details/recipe-details.module').then(m => m.RecipeDetailsModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
