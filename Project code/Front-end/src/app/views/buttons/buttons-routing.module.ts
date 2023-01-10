import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Buttons'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'buttons'
      },
      
      
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonsRoutingModule {
}
