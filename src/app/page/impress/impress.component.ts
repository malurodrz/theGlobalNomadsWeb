import { Component } from '@angular/core';

@Component({
  selector: 'app-impress',
  standalone: false,

  templateUrl: './impress.component.html',
  styleUrls: ['./impress.component.scss', '../../component/header/header.component.scss'],
})
export class ImpressComponent {
  images = [
    { src: 'assets/img/hotel.png', alt: 'Image 1', title: 'Empresa de hotéis de Luxo é destaque 2024', site: 'Globo' },
    { src: 'assets/img/hotel.png', alt: 'Image 2', title: 'Empresa de hotéis de Luxo é destaque 2024', site: 'Globo' },
    { src: 'assets/img/hotel.png', alt: 'Image 3', title: 'Empresa de hotéis de Luxo é destaque 2024', site: 'Globo' },
    { src: 'assets/img/hotel.png', alt: 'Image 4', title: 'Empresa de hotéis de Luxo é destaque 2024', site: 'Globo' },
    { src: 'assets/img/hotel.png', alt: 'Image 4', title: 'Empresa de hotéis de Luxo é destaque 2024', site: 'Globo' },
    { src: 'assets/img/hotel.png', alt: 'Image 4', title: 'Empresa de hotéis de Luxo é destaque 2024', site: 'Globo' }
  ];
}
