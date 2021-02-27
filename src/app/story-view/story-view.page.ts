import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Storyes } from '../models/stories.model';

@Component({
  selector: 'app-story-view',
  templateUrl: './story-view.page.html',
  styleUrls: ['./story-view.page.scss'],
})
export class StoryViewPage implements OnInit {

  private stories:Array<Storyes>;
  private index: number;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
  ) { }

  ngOnInit() {
    this.stories = this.navParams.get('stories')
    this.index = this.navParams.get('tapped')
    console.log(this.stories)
  }



  closeActualStory(){
    this.modalController.dismiss()
  }

}
