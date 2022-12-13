import {Component, OnInit} from '@angular/core';
import {DeezerService} from "../../services/deezer.service";

@Component({
  selector: 'app-musics-page',
  templateUrl: './musics-page.component.html',
  styleUrls: ['./musics-page.component.scss']
})
export class MusicsPageComponent implements OnInit {
  songs: any[];
  index = 0;

  constructor(private deezerService: DeezerService) {
  }

  ngOnInit() {
    this.deezerService.getCharts("464", this.index, "10")
      .subscribe((data) => {
        this.songs = data.data;
      });
  }

  onScroll(): void {
    this.deezerService.getCharts("464", this.index += 10, "10").subscribe(
      (data) =>
        this.songs.push(...data.data)
    )
    ;
  }

}
