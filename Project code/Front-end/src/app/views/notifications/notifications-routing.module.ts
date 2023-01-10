import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Notifications'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'badges'
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule {
}
