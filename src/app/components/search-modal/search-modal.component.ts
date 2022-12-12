import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss']
})
export class SearchModalComponent implements OnInit {
  search: string;

  ngOnInit() {
    const modal = document.getElementById("search_modal");
    const musicItems = [].slice.call(document.getElementsByClassName("music-list-item"));
    musicItems.forEach(m => {
      m.onclick = () => modal.style.display = "none";
    });
  }

  submit(): void {
    console.log(this.search);
  }

}
