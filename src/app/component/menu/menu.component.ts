import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: false,

  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  constructor(private router: Router) {}

  @Output() close = new EventEmitter();

  closeMenu() {
    this.close.emit();
  }

  navigateAndClose(url: string) {
    this.router.navigate([url]).then(() => {
      this.closeMenu()
    });
  }
}
