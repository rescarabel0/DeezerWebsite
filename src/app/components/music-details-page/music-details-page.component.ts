import {Component, OnInit} from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-music-details-page',
  templateUrl: './music-details-page.component.html',
  styleUrls: ['./music-details-page.component.scss']
})
export class MusicDetailsPageComponent implements OnInit {
  playing = false;
  previousTime = 0;
  currentTime = 0;
  widthBySongTime = 0;

  thumbWidth = 0;

  constructor() {
  }

  ngOnInit() {
    const trackBarWidth = $("#track-bar").width();
    this.widthBySongTime = trackBarWidth / 30;
    this.track();
  }

  toggle(): void {
    const audioElement = document.getElementById("song-preview") as HTMLAudioElement;
    if (!this.playing) audioElement.play().then();
    else audioElement.pause();
    this.playing = !this.playing;
  }

  track(): void {
    setInterval(() => {
      const audioElement = document.getElementById("song-preview") as HTMLAudioElement;
      this.currentTime = Number(audioElement.currentTime.toFixed(0));
      if (this.currentTime > 30) this.currentTime = 30;
      if (this.currentTime > this.previousTime) {
        this.previousTime = this.currentTime;
        $("#track-bar-thumb").width(this.thumbWidth += this.widthBySongTime);
      }

      if (audioElement.ended) {
        $("#track-bar-thumb").width(0);
        this.playing = false;
        this.currentTime = 0;
        this.previousTime = 0;
        this.thumbWidth = 0;
      }
    }, 1000);
  }
}
