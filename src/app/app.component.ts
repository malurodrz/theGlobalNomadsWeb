import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss', animations: [
    // Animação do menu
    trigger('menuAnimation', [
      state(
        'closed',
        style({
          transform: 'translateX(-100%)', // Menu inicia fora da tela (esquerda)
          opacity: 0,
        })
      ),
      state(
        'open',
        style({
          transform: 'translateX(0)', // Menu está visível
          opacity: 1,
        })
      ),
      transition('closed <=> open', [
        animate('300ms ease-in-out'), // Transição suave para abrir/fechar
      ]),
    ]),

    // Animação para troca entre conteúdos (páginas)
    trigger('contentAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(10%)' }), // Inicial
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })), // Animação para aparecer
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateX(-10%)' })), // Animação para desaparecer
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'The Global Nomads';

  constructor(private router: Router) {}

  protected open: boolean = true;

  openMenu() {
    this.open = false;
  }

  closeMenu() {
    this.open = true; // Fecha o modal
  }

  navigateAndClose(url: string) {
    this.router.navigate([url]).then(() => {
      this.closeMenu()
    });
  }

}
