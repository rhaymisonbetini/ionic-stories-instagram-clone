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

    let showStories: any = [...this.stories];

    for (let i = 0; i < index; i++) {
      delete showStories[i];
    }

    showStories =  showStories.filter(element => {
      return element != null || element != undefined
    })

    let data = { stories: showStories, tapped: index }

    const modal = await this.modalController.create({
      component: StoryViewPage,
      componentProps: data
    });

    modal.onDidDismiss()
      .then(() => { });

    return await modal.present();
  }

}
