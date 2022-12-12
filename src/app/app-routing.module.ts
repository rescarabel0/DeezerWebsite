import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import {MusicDetailsPageComponent} from "./components/music-details-page/music-details-page.component";

const routes: Routes = [
  {
    path: "", children: [
      {path: "", pathMatch: "full", component: LandingPageComponent},
      {path: "musics/:id", component: MusicDetailsPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
