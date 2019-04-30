import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule' },
  { path: 'appointment', loadChildren: './pages/appointment/appointment.module#AppointmentPageModule' },
  { path: 'conversation', loadChildren: './pages/conversation/conversation.module#ConversationPageModule' },
  { path: 'video-room', loadChildren: './pages/video-room/video-room.module#VideoRoomPageModule' },
  { path: 'video-room', loadChildren: './pages/video-room/video-room.module#VideoRoomPageModule' },
  { path: 'messages', loadChildren: './pages/conversation/messages/messages.module#MessagesPageModule' },
  { path: 'message', loadChildren: './pages/conversation/messages/message/message.module#MessagePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
