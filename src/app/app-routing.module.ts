import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path: '',
    component: TableComponent
  },
  {
    path: 'list',
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
