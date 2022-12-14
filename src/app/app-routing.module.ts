import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import {MusicDetailsPageComponent} from "./components/music-details-page/music-details-page.component";
import {MusicsPageComponent} from "./components/musics-page/musics-page.component";
import {MyMusicsPageComponent} from "./components/my-musics-page/my-musics-page.component";

const routes: Routes = [
  {
    path: "", children: [
      {path: "", pathMatch: "full", component: LandingPageComponent},
      {path: "musics", pathMatch: "full", component: MusicsPageComponent},
      {path: "musics/:id", pathMatch: "full", component: MusicDetailsPageComponent},
      {path: "my", pathMatch: "full", component: MyMusicsPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
