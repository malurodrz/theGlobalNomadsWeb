import {Component, Input, ViewChild} from '@angular/core';
import {Carousel} from 'primeng/carousel';

export interface Hotel {
  id: number;
  picture: string;
  name: string;
  city: string;
  country: string;
}

@Component({
  selector: 'app-home-gallery',
  standalone: false,

  templateUrl: './home-gallery.component.html',
  styleUrl: './home-gallery.component.scss'
})
export class HomeGalleryComponent {
  @Input() title: string | undefined;
  @Input() hotels: Hotel[] = [
    {
      id: 1,
      picture: 'assets/img/hotel.png',
      name: 'Explora Atacama',
      city: 'Atacama',
      country: 'Chile',
    },
    {
      id: 2,
      picture: 'assets/img/hotel.png',
      name: 'Explora Atacama',
      city: 'Cusco',
      country: 'Peru',
    },
    {
      id: 3,
      picture: 'assets/img/hotel.png',
      name: 'Explora Atacama',
      city: 'Ilha de Páscoa',
      country: 'Chile',
    },
    {
      id: 4,
      picture: 'assets/img/hotel.png',
      name: 'Explora Atacama',
      city: 'Ilha de Páscoa',
      country: 'Brasil',
    },
    {
      id: 5,
      picture: 'assets/img/hotel.png',
      name: 'Explora Atacama',
      city: 'Belo Horizonte',
      country: 'Minas Gerais',
    },
    {
      id: 5,
      picture: 'assets/img/hotel.png',
      name: 'Explora Atacama1',
      city: 'Belo Horizonte',
      country: 'Minas Gerais',
    }
  ];
}
