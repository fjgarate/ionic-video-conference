import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { User } from '../../shared/models/user';
import { ConversationService } from '../../shared/services/conversation.service';

import { AuthenticationService } from '../../shared/services/authentication.service';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'app',
    component: HomePage,
    children: [
      {
        path: 'home',
        loadChildren: '../home/home.module#HomePageModule'
      },
    {
      path: 'appointment2',
      loadChildren: '../appointment/appointment.module#AppointmentPageModule'
    }
    ]
  },

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
