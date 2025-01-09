import {AfterViewInit, Component, Renderer2} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import {Subscription} from 'rxjs';

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
  protected open: boolean = false;
  public isClientPage: string = '';
  private routerSubscription: Subscription;


  constructor(private router: Router) {
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updatePageColor();
      }
    });
  }

  private updatePageColor() {
    if (this.router.url.includes('client1') && !this.open) {
      this.isClientPage = 'vertical-client1';
    } else if (this.router.url.includes('client') && !this.open) {
      this.isClientPage = 'vertical-client';
    } else if (this.router.url.includes('event/') && !this.open) {
      this.isClientPage = 'vertical-event';
    } else {
      this.isClientPage = 'vertical-line';
    }
  }

  openMenu() {
    this.open = true;
    this.isClientPage = 'vertical-line';
  }

  closeMenu() {
    this.open = false; // Fecha o modal
    this.updatePageColor();
  }

  ngOnDestroy() {
    // Garante que a inscrição no evento de rota seja limpa ao destruir o componente
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
