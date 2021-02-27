import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonChip, IonicModule } from '@ionic/angular';

import { StoryViewPageRoutingModule } from './story-view-routing.module';

import { StoryViewPage } from './story-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoryViewPageRoutingModule
  ],
  declarations: [StoryViewPage]
})
export class StoryViewPageModule {}
