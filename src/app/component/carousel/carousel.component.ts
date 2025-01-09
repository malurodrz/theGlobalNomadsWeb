import {Component, Input, OnInit} from '@angular/core';

export interface Hotel {
  picture: string;
  name: string;
  city: string;
  country: string;
}

@Component({
  selector: 'app-carousel',
  standalone: false,

  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss', '../../page/events/events.component.scss']
})
export class CarouselComponent implements OnInit{
  @Input() hotels: Hotel[] = [];
  @Input() title: string = '';
  visibleItems: any[][] = [[], []]; // Armazena os itens visíveis para as duas linhas
  currentIndex: number = 0; // Índice atual do carousel

  ngOnInit() {
    this.updateVisibleItems();
  }

  updateVisibleItems() {
    const start = this.currentIndex * 3; // 3 itens por página
    const currentItems = this.hotels.slice(start, start + 3); // Pega os itens visíveis

    // Divide os itens em duas linhas
    this.visibleItems = [
      currentItems.slice(0, 6), // Primeira linha
    ];
  }

  next() {
    if (this.currentIndex < Math.ceil(this.hotels.length / 3) - 1) {
      this.currentIndex++;
      this.updateVisibleItems();
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateVisibleItems();
    }
  }
}
