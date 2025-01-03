import {Component, Input, OnInit} from '@angular/core';

export interface Event {
  picture: string;
  title: string;
  describe: string;
}

@Component({
  selector: 'app-events',
  standalone: false,

  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss', '../../component/home-list/home-list.component.scss']
})
export class EventsComponent implements OnInit {
  hotels = [
    { date: '15/12', location: 'Inspire Luxury Hospitality Conference' },
    { date: '05/03', location: 'ILTM Latin America' },
    { date: '02/04', location: 'Expotel' },
    { date: '02/04', location: 'Ilhas Baleares, Espanha' },
    { date: '05/05', location: 'Top Hotel Praha' },
  ];

  @Input() events: Event[] = [
    {
      picture: 'assets/img/hotel.png',
      title: '1',
      describe: 'Atacama',
    },
    {
      picture: 'assets/img/hotel.png',
      title: '2',
      describe: 'Atacama',
    },
    {
      picture: 'assets/img/hotel.png',
      title: '3',
      describe: 'Atacama',
    },
    {
      picture: 'assets/img/hotel.png',
      title: '4',
      describe: 'Atacama',
    },
    {
      picture: 'assets/img/hotel.png',
      title: '5',
      describe: 'Atacama',
    },
    {
      picture: 'assets/img/hotel.png',
      title: '6',
      describe: 'Atacama',
    }
  ];

  items = [
    { picture: 'assets/img/hotel.png', title: '1', describe: 'Conferência internacional de hoteis de luxo. ' },
    { picture: 'assets/img/hotel.png', title: '2', describe: 'Conferência internacional de hoteis de luxo. ' },
    { picture: 'assets/img/hotel.png', title: '3', describe: 'Conferência internacional de hoteis de luxo. ' },
    { picture: 'assets/img/hotel.png', title: '4', describe: 'Conferência internacional de hoteis de luxo. ' },
    { picture: 'assets/img/hotel.png', title: '5', describe: 'Conferência internacional de hoteis de luxo. ' },
    { picture: 'assets/img/hotel.png', title: '6', describe: 'Conferência internacional de hoteis de luxo. ' },
    { picture: 'assets/img/hotel.png', title: '7', describe: 'Conferência internacional de hoteis de luxo. ' },
    { picture: 'assets/img/hotel.png', title: '8', describe: 'Conferência internacional de hoteis de luxo. ' },
    { picture: 'assets/img/hotel.png', title: '9', describe: 'Conferência internacional de hoteis de luxo. ' },
    { picture: 'assets/img/hotel.png', title: '10', describe: 'Conferência internacional de hoteis de luxo. ' },
    { picture: 'assets/img/hotel.png', title: '11', describe: 'Conferência internacional de hoteis de luxo. ' },
    { picture: 'assets/img/hotel.png', title: '12', describe: 'Conferência internacional de hoteis de luxo. ' },
  ];

  visibleItems: any[][] = [[], []]; // Armazena os itens visíveis para as duas linhas
  currentIndex: number = 0; // Índice atual do carousel

  ngOnInit() {
    this.updateVisibleItems();
  }

  updateVisibleItems() {
    const start = this.currentIndex * 6; // 6 itens por página
    const currentItems = this.items.slice(start, start + 6); // Pega os itens visíveis

    // Divide os itens em duas linhas
    this.visibleItems = [
      currentItems.slice(0, 3), // Primeira linha
      currentItems.slice(3, 6)  // Segunda linha
    ];

    console.log('Visible Items:', this.visibleItems); // Verifica os dados
  }

  next() {
    console.log('Previous clicked');
    if (this.currentIndex < Math.ceil(this.items.length / 6) - 1) {
      this.currentIndex++;
      this.updateVisibleItems();
    }
  }

  prev() {
    console.log('Previous clicked2');
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateVisibleItems();
    }
  }
}
