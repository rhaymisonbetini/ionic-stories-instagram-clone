import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataBase } from '../database/database';
import { Storyes } from '../models/stories.model';
import { StoryViewPage } from '../story-view/story-view.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public stories: Array<Storyes>;

  constructor(
    private dataBase: DataBase,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.stories = this.dataBase.stories;
  }


  async openStory(index: number) {
    let data = { stories: this.stories, tapped: index }
    const modal = await this.modalController.create({
      component: StoryViewPage,
      componentProps: data
    });
    return await modal.present();
  }

}
