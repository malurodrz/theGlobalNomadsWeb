import { Component } from '@angular/core';

export interface HotelImages {
  id: number;
  picture: string;
  name: string;
  description?: string | undefined;
}

@Component({
  selector: 'app-client',
  standalone: false,

  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss', '../event/event.component.scss', '../events/events.component.scss']
})
export class ClientComponent {
  hotelName: string = 'Six Senses Laamu';
  locale: string = 'Atol de Laamu';
  country: string = 'Maldivas';
  logoRede: string = 'assets/img/client/logo.svg';
  headerBackground: string = 'assets/img/client/background.png';

  conceitoCurtoDoHotel: string = 'Serenidade descalça';
  hotelDescription: string = 'O Six Senses Laamu está ao sul das Maldivas, sendo o único resort 5- estrelas no remoto Atol de Laamu, com uma localização privilegiada que permite ao hóspede viver o melhor desse destino, rodeado por palmeiras, praias de águas cristalina, onde os golfinhos, arraias, tartarugas e peixes nadam livremente no mar turquesa das Maldivas. ';
  hotelImage: string = 'assets/img/client/primeira.png';
  hotelLink: string = '{{link site oficial}}';

  carrousel1Title: string = 'Acomodações';
  carrousel1Itens: HotelImages[] = [
    {
      id: 1,
      picture: 'assets/img/client/hoteis/01.png',
      name: 'Water Villa Pool',
      description: 'Bangalô com piscina privada com vista espetacular.'
    },
    {
      id: 2,
      picture: 'assets/img/client/hoteis/02.png',
      name: 'Water Villa',
      description: 'Design interior sustentável e bem equipado.'
    },
    {
      id: 3,
      picture: 'assets/img/client/hoteis/03.png',
      name: 'The Retreat',
      description: 'Espaços em frente à praia com design único.'
    }
  ];

  carrousel2Title: string = 'Experiências';
  // carrousel2Itens: HotelImages = [];

  phasehotel: string = 'Com 6 restaurantes, as opções gastronômicas foram projetadas para aproveitar a beleza idílica da ilha, com vistas panorâmicas e espetaculares do nascer e por do sol.';
  primeImgHotel: string = 'assets/img/client/segunda.png';
  linkIgHotel: string = '{{link do instagram}}'

  textDescription: string = 'A brisa do mar passeia entre as madeiras rústicas, enquanto os menus memoráveis dos restaurantes são enriquecidos por vistas tropicais, com inspiradores nasceres e pores do sol românticos que se dissolvem no mar ao anoitecer. Uma série de atividades que te convidam a desfrutar o local, e o cuidado com a natureza fazem toda a experiência nesse paraíso muito especial. Areias brancas, águas turquesa, praias intocadas e vegetação exuberante. O resort oferece um estilo individual e natural, junto com uma maravilhosa sensação de privacidade.';
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
