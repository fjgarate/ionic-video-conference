import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: 'app',
    component: DashboardPage,
    children: [
        {
          path: 'home',
          loadChildren: '../home/home.module#HomePageModule'
        },
        
        {
          path: 'conversation',
          loadChildren: '../conversation/conversation.module#ConversationPageModule'
        },
        {
          path: 'video-room',
          loadChildren: '../video-room/video-room.module#VideoRoomPageModule'
        }
      ]
    },
    {
      path: '',
      redirectTo: 'app/home',
      pathMatch: 'full'
    }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
