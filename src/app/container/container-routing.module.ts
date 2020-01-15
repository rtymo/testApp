import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const containerRoutes: Routes = [
  { path: '', component: MainComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(containerRoutes)
  ],
  exports: [ RouterModule ]
})
export class ContainerRoutingModule { }
