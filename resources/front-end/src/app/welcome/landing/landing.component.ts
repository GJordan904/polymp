import { Component, OnInit } from '@angular/core';
import {ParallaxConfig} from '../../ui/directives/parallax/parallax.config';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  fileIcons = [];
  deviceIcons = [];
  plaxHeaderConf: ParallaxConfig = {
    startPosition: -750,
    ratio: .365,
    maxValue: null,
    minValue: null
  };

  constructor( ) {
  }

  ngOnInit(): void {

  }

  fillIcons() {
    const base = '/assets/img/icons/';
    let icons = ['aac.png','avi.png','flv.png','mkv.png','mov.png','mp3.png','mp4.png','mpeg.png','mpg.png','wma.png'];
    for (let icon of icons) {
      this.fileIcons.push(base + icon)
    }
    icons = ['desktop.png','phone.png','tablet.png'];
    for (let icon of icons) {
      this.deviceIcons.push(base + icon);
    }
  }
}