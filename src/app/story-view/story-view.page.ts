import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController, NavParams } from '@ionic/angular';
import { Storyes } from '../models/stories.model';

@Component({
  selector: 'app-story-view',
  templateUrl: './story-view.page.html',
  styleUrls: ['./story-view.page.scss'],
})
export class StoryViewPage implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;
  @ViewChild("progress") set progressElement(progress: any) {
    if (progress) {
      progress = progress.nativeElement;

      progress.addEventListener("animationend", () => { this.nextStoryItem(); });
      progress.addEventListener("webkitAnimationEnd", () => { this.nextStoryItem(); });
    }
  }

  private stories: Array<Storyes>;
  private index: number;
  private activeIndex: number = 0;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
  ) { }

  ngOnInit() {
    this.stories = this.navParams.get('stories')
    this.index = this.navParams.get('tapped')
  }

  getActiveIndex() {
    this.slides.getActiveIndex().then((index: number) => {
      this.activeIndex = index;
    })
  }

  closeActualStory() {
    this.modalController.dismiss()
  }


  nextStoryItem(){
    console.log('proximo')
  }

}
