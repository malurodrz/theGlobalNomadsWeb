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
  eventsList = [
    { id: 1, date: '10/02/2025', location: 'Roadshow The Global Nomads - São Paulo' },
    { id: 2, date: '11/02/2025', location: 'Roadshow The Global Nomads - Goiânia' },
    { id: 3, date: '12/02/2025', location: 'Roadshow The Global Nomads - Curitiba' },
    { id: 4, date: '13/02/2025', location: 'Roadshow The Global Nomads - Rio de Janeiro' },
    { id: 5, date: '12/03/2025', location: 'Beyond Experiences - Embark Beyond (12 a 14 de Março)' },
    { id: 6, date: '04/05/2025', location: 'Trade Partners' },
    { id: 7, date: '05/05/2025', location: 'ILTM Latin America (05 a 08 de Maio)' }
  ]

  items = [
    { id: 1,picture: 'assets/img/hotel.png', title: 'Aniversário - Embark Beyond Brasil' },
    { id: 2,picture: 'assets/img/hotel.png', title: 'TTW Cruise Day' },
    { id: 3,picture: 'assets/img/hotel.png', title: 'SPFW São Paulo (Co-branding: Patricia Viera & Explora)' },
    { id: 4,picture: 'assets/img/hotel.png', title: 'Trade Partners - Teresa Perez' },
    { id: 5,picture: 'assets/img/hotel.png', title: 'ILTM Latin America 2024' },
    { id: 6,picture: 'assets/img/hotel.png', title: 'Cartier Loja Conceito (Co-branding: Cartier & SHA Wellness)' },
    { id: 7,picture: 'assets/img/hotel.png', title: 'CSI - W Longines São Paulo Horse Show - 33º Indoor (Sociedade Hípica Paulista) - Leilão Beneficente' },
    { id: 8,picture: 'assets/img/hotel.png', title: 'The Collection - Perfect Trip (Wedding Event)' },
    { id: 9,picture: 'assets/img/hotel.png', title: 'Africa Partners - Teresa Perez' },
    { id: 10,picture: 'assets/img/hotel.png', title: 'Outubro Rosa (Sociedade Hípica Paulista) - Evento Beneficente' },
    { id: 11,picture: 'assets/img/hotel.png', title: 'Rio de Janeiro' },
    { id: 12,picture: 'assets/img/hotel.png', title: 'Roadshow de Navegações - Kangaroo Tours' },
    { id: 13,picture: 'assets/img/hotel.png', title: 'IT Brands - Villaggio JK' },
    { id: 14,picture: 'assets/img/hotel.png', title: 'Celebração 100 Episódios CNN Viagem e Gastronomia' }
  ]

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
  }

  next() {
    if (this.currentIndex < Math.ceil(this.items.length / 6) - 1) {
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
