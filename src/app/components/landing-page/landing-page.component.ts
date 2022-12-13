import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {DeezerService} from "../../services/deezer.service";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  songs$: Observable<{ data: any[] }>;

  constructor(private deezerService: DeezerService) {
  }

  ngOnInit() {
    this.songs$ = this.deezerService.getCharts("132", 0, "4");
  }

}
