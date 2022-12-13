import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SongTileComponent} from './components/song-tile/song-tile.component';
import {MusicDetailsPageComponent} from './components/music-details-page/music-details-page.component';
import {SearchModalComponent} from './components/search-modal/search-modal.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MusicsPageComponent} from './components/musics-page/musics-page.component';
import {InfiniteScrollModule} from "ngx-infinite-scroll";

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    SongTileComponent,
    MusicDetailsPageComponent,
    SearchModalComponent,
    MusicsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
