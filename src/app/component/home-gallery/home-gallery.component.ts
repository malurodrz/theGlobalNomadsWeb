import {Component, Input, ViewChild} from '@angular/core';
import {Carousel} from 'primeng/carousel';

export interface Hotel {
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
      picture: 'assets/img/hotel.png',
      name: 'Explora Atacama',
      city: 'Atacama',
      country: 'Chile',
    },
    {
      picture: 'assets/img/hotel.png',
      name: 'Explora Atacama',
      city: 'Cusco',
      country: 'Peru',
    },
    {
      picture: 'assets/img/hotel.png',
      name: 'Explora Atacama',
      city: 'Ilha de Páscoa',
      country: 'Chile',
    },
    {
      picture: 'assets/img/hotel.png',
      name: 'Explora Atacama',
      city: 'Ilha de Páscoa',
      country: 'Brasil',
    },
    {
      picture: 'assets/img/hotel.png',
      name: 'Explora Atacama',
      city: 'Belo Horizonte',
      country: 'Minas Gerais',
    }
  ];
}
