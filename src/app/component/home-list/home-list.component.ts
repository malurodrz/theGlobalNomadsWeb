import { Component } from '@angular/core';

@Component({
  selector: 'app-home-list',
  standalone: false,

  templateUrl: './home-list.component.html',
  styleUrl: './home-list.component.scss'
})
export class HomeListComponent {
  hotels = [
    { id: 1, name: 'Explora Atacama', location: 'Atacama, Chile', href: '/pages/client' },
    { id: 2, name: 'Explora Valle Sagrado', location: 'Cusco, Peru', href: '/pages/client'},
    { id: 3, name: 'Explora Rapa Nui', location: 'Ilha de Páscoa, Chile', href: '/pages/client'},
    { id: 4, name: 'Vestige Son Vell', location: 'Ilhas Baleares, Espanha', href: '/pages/client'},
    { id: 5, name: 'Vestige Palacio de Figueras', location: 'Figueras, Espanha', href: '/pages/client'},
    { id: 6, name: 'Vestige Miramar', location: 'Mallorca, Espanha', href: '/pages/client'},
    { id: 7, name: 'Six Senses Zighy Bay', location: 'Zighy Bay, Omã', href: '/pages/client'},
  ];
}
