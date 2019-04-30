import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VideoRoomPage } from './video-room.page';
import { OpenViduVideoComponent } from '../../ov-video.component';
import { UserVideoComponent } from '../../user-video.component';

const routes: Routes = [
  {
    path: '',
    component: VideoRoomPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    VideoRoomPage,
    UserVideoComponent,
    OpenViduVideoComponent,

  ]
})
export class VideoRoomPageModule {}
