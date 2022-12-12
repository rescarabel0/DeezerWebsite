import {Component} from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  songs = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
  ];

}
