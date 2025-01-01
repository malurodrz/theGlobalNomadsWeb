import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'The Global Nomads';

  protected open: boolean = false;

  openMenu() {
    this.open = true;
  }

  closeMenu() {
    this.open = false; // Fecha o modal
  }

}
