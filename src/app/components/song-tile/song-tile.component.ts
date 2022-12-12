import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-song-tile',
  templateUrl: './song-tile.component.html',
  styleUrls: ['./song-tile.component.scss']
})
export class SongTileComponent {
  @Input()
  song: any;

}
