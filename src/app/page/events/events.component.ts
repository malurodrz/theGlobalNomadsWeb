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
    { date: '10/02/2025', location: 'Roadshow The Global Nomads - São Paulo' },
    { date: '11/02/2025', location: 'Roadshow The Global Nomads - Goiânia' },
    { date: '12/02/2025', location: 'Roadshow The Global Nomads - Curitiba' },
    { date: '13/02/2025', location: 'Roadshow The Global Nomads - Rio de Janeiro' },
    { date: '12/03/2025', location: 'Beyond Experiences - Embark Beyond (12 a 14 de Março)' },
    { date: '04/05/2025', location: 'Trade Partners' },
    { date: '05/05/2025', location: 'ILTM Latin America (05 a 08 de Maio)' }
  ]

  items = [
    { picture: 'assets/img/hotel.png', title: 'Aniversário - Embark Beyond Brasil' },
    { picture: 'assets/img/hotel.png', title: 'TTW Cruise Day' },
    { picture: 'assets/img/hotel.png', title: 'SPFW São Paulo (Co-branding: Patricia Viera & Explora)' },
    { picture: 'assets/img/hotel.png', title: 'Trade Partners - Teresa Perez' },
    { picture: 'assets/img/hotel.png', title: 'ILTM Latin America 2024' },
    { picture: 'assets/img/hotel.png', title: 'Cartier Loja Conceito (Co-branding: Cartier & SHA Wellness)' },
    { picture: 'assets/img/hotel.png', title: 'CSI - W Longines São Paulo Horse Show - 33º Indoor (Sociedade Hípica Paulista) - Leilão Beneficente' },
    { picture: 'assets/img/hotel.png', title: 'The Collection - Perfect Trip (Wedding Event)' },
    { picture: 'assets/img/hotel.png', title: 'Africa Partners - Teresa Perez' },
    { picture: 'assets/img/hotel.png', title: 'Outubro Rosa (Sociedade Hípica Paulista) - Evento Beneficente' },
    { picture: 'assets/img/hotel.png', title: 'Rio de Janeiro' },
    { picture: 'assets/img/hotel.png', title: 'Roadshow de Navegações - Kangaroo Tours' },
    { picture: 'assets/img/hotel.png', title: 'IT Brands - Villaggio JK' },
    { picture: 'assets/img/hotel.png', title: 'Celebração 100 Episódios CNN Viagem e Gastronomia' }
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
