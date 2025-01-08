import { Component } from '@angular/core';

export interface HotelImages {
  id: number;
  picture: string;
  name: string;
  description?: string | undefined;
}

@Component({
  selector: 'app-client1',
  standalone: false,

  templateUrl: './client1.component.html',
  styleUrls: ['./client1.component.scss', '../event/event.component.scss', '../events/events.component.scss']
})
export class Client1Component {
  hotelName: string = 'Explora Atacama';
  locale: string = 'Oásis de San Pedro';
  country: string = 'Chile';
  logoRede: string = 'assets/img/client1/logo.svg';
  headerBackground: string = 'assets/img/client1/background.png';

  conceitoCurtoDoHotel: string = 'Descubra belezas incomuns';
  hotelDescription: string = 'Uma propriedade preservada, exclusiva que conta com a estrutura principal do hotel com a nova área social, os 50 quartos (3 tipos de categoria - Tulur, Yali e Suite Catur), 04 piscinas e 02 jacuzzis externas, saunas, casa de massagem restaurada datada de 1820, Estábulo com cavalos próprios, Observatório, área para o Quincho e caminhos charmosos para percorrer todo o entorno.'
  hotelImage: string = 'assets/img/client1/primeira.png';
  hotelLink: string = '{{link site oficial}}';

  carrousel1Title: string = 'Nosso Lodge';
  carrousel1Itens: HotelImages[] = [
    {
      id: 1,
      picture: 'assets/img/client/hoteis/01.png',
      name: 'Explorações',
      description: 'Bangalô com piscina privada com vista espetacular.'
    },
    {
      id: 2,
      picture: 'assets/img/client/hoteis/02.png',
      name: 'Observatório',
      description: 'Design interior sustentável e bem equipado.'
    },
    {
      id: 3,
      picture: 'assets/img/client/hoteis/03.png',
      name: 'Termas Puritama',
      description: 'Espaços em frente à praia com design único.'
    }
  ];

  phasehotel: string = 'O explora Atacama foi projetado como a base perfeita para sair a explorar o deserto, o altiplano e todas as áreas naturais que o cercam com mais de 40 opções.';
  primeImgHotel: string = 'assets/img/client1/segunda.png';
  linkIgHotel: string = '{{link do instagram}}'

  hotelImages: string[] = []

  visibleItems: any[][] = [[], []]; // Armazena os itens visíveis para as duas linhas
  currentIndex: number = 0; // Índice atual do carousel

  ngOnInit() {
    this.updateVisibleItems();
  }

  updateVisibleItems() {
    const start = this.currentIndex * 6; // 6 itens por página
    const currentItems = this.carrousel1Itens.slice(start, start + 6); // Pega os itens visíveis

    // Divide os itens em duas linhas
    this.visibleItems = [
      currentItems.slice(0, 3), // Primeira linha
      currentItems.slice(3, 6)  // Segunda linha
    ];
  }

  next() {
    if (this.currentIndex < Math.ceil(this.carrousel1Itens.length / 6) - 1) {
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
