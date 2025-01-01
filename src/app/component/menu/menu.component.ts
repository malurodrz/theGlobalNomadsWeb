import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: false,

  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Output() close = new EventEmitter();

  closeMenu() {
    this.close.emit();
  }
}
