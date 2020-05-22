import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DataBindingComponent} from "./data-binding/data-binding.component";
import {NgIfNgForComponent} from "./ng-if-ng-for/ng-if-ng-for.component";
import {HttpClientModule} from "@angular/common/http";


const routes: Routes = [
  {path: 'primeiro-componente', component: DataBindingComponent},
  {path: 'teste', component: NgIfNgForComponent},
];

@NgModule({
  imports: [HttpClientModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
