import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HListComponent } from './h-list/h-list.component';
import { FilterComponent } from './filter/filter.component';


const routes: Routes = [
  {path:'h-list',component:HListComponent},
  {path:'filter',component:FilterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





