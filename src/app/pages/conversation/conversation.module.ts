import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConversationPage } from './conversation.page';

const routes: Routes = [
  {
    path: '',
    component: ConversationPage,
    children: [
      {
        path: 'messages',
        loadChildren: './messages/messages.module#MessagesPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConversationPage]
})
export class ConversationPageModule {}
