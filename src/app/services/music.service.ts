import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor() {
  }

  saveMusic(songId: string): void {
    const currentSongs = this.getSavedMusics() ?? [];
    if (currentSongs.includes(songId))
      return;
    currentSongs.push(songId);
    window.localStorage.setItem("saved", JSON.stringify(currentSongs));
  }

  removeMusic(songId: string): void {
    let currentSongs = this.getSavedMusics() ?? [];
    if (!currentSongs.includes(songId))
      return;
    currentSongs = currentSongs.filter(m => m != songId);
    window.localStorage.setItem("saved", JSON.stringify(currentSongs));
  }

  getSavedMusics(): any[] {
    return JSON.parse(window.localStorage.getItem("saved")) as any[];
  }

  musicIsSaved(songId: string): boolean {
    const currentSongs = this.getSavedMusics() ?? [];
    return currentSongs.includes(songId);
  }
}
