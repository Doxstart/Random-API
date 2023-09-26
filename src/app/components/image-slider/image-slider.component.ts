import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { IMeme, IMemeInfo } from 'src/app/models/memes';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('500ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class ImageSliderComponent {
  slides: IMeme[] = []

  currentIndex: number = 0;

  showNextImage(){
    this.currentIndex = (this.currentIndex + 1) % this.slides.length
  }

  showPreviousImage(){
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }
}
