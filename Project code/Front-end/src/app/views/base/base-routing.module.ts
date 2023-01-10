import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'cards',
      },
      {
        path: 'tables',
        component: TablesComponent,
        data: {
          title: 'Tables',
        },
      }
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaseRoutingModule {}

