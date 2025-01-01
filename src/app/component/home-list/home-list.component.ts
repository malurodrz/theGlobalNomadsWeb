import { Component } from '@angular/core';

@Component({
  selector: 'app-home-list',
  standalone: false,

  templateUrl: './home-list.component.html',
  styleUrl: './home-list.component.scss'
})
export class HomeListComponent {
  hotels = [
    { name: 'Explora Atacama', location: 'Atacama, Chile' },
    { name: 'Explora Valle Sagrado', location: 'Cusco, Peru' },
    { name: 'Explora Rapa Nui', location: 'Ilha de Páscoa, Chile' },
    { name: 'Vestige Son Vell', location: 'Ilhas Baleares, Espanha' },
    { name: 'Vestige Palacio de Figueras', location: 'Figueras, Espanha' },
    { name: 'Vestige Miramar', location: 'Mallorca, Espanha' },
    { name: 'Six Senses Zighy Bay', location: 'Zighy Bay, Omã' },
  ];
}
