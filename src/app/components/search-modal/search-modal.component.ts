import {Component, OnInit} from '@angular/core';
import {DeezerService} from "../../services/deezer.service";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss']
})
export class SearchModalComponent implements OnInit {
  search: string;

  results$: Observable<any[]>;

  constructor(private deezerService: DeezerService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const modal = document.getElementById("search_modal");
    const musicItems = [].slice.call(document.getElementsByClassName("music-list-item"));
    musicItems.forEach(m => {
      m.onclick = () => modal.style.display = "none";
    });
  }

  submit(): void {
    this.results$ = this.deezerService.search(this.search);
  }

  goToMusic(id: string): void {
    if (this.router.url.match("/musics/[1-9]")) {
      window.location.replace("/musics/" + id);
      return;
    }
    this.router.navigate(["musics", id]);
  }

}
