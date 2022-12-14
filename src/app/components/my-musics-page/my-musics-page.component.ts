import {Component, OnInit} from '@angular/core';
import {MusicService} from "../../services/music.service";
import {DeezerService} from "../../services/deezer.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-my-musics-page',
  templateUrl: './my-musics-page.component.html',
  styleUrls: ['./my-musics-page.component.scss']
})
export class MyMusicsPageComponent implements OnInit {
  songs: Observable<any>[];

  constructor(private musicService: MusicService, private deezerService: DeezerService) {
  }

  ngOnInit() {
    this.songs = this.musicService.getSavedMusics()
      .map(m => this.deezerService.findTrackById(m));
  }
}
