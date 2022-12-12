import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  modal: HTMLDivElement;

  showingModal = false;

  ngOnInit() {
    this.modal = document.getElementById("search_modal") as HTMLDivElement;

    window.onclick = (e) => {
      if (e.target == this.modal) {
        this.toggleModal();
      }
    };
  }

  toggleModal(): void {
    if (this.showingModal) {
      this.showingModal = false;
      this.modal.style.display = "none";
    } else {
      this.showingModal = true;
      this.modal.style.display = "flex";
    }
  }
}
