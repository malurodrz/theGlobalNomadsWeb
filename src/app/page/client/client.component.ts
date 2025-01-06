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
  styleUrls: ['./client.component.scss', '../event/event.component.scss']
})
export class ClientComponent {
  hotelName: string = '{{Nome do Hotel}}';
  locale: string = '{{Local, País}}';
  country: string = '{{Local, País}}';
  logoRede: string = 'img {{logo da rede}}';
  headerBackground: string = 'img {{header background}}';

  conceitoCurtoDoHotel: string = '{{conceito curto do hotel}}';
  hotelDescription: string = '{{curta descrição do hotel}}';
  hotelImage: string = 'img {{primeira}}';
  hotelLink: string = '{{link site oficial}}';

  carrousel1Title: string = '{{título do carrossel 1}}';
  carrousel1Itens = [];

  carrousel2Title: string = '{{título do carrossel 2}}';
  // carrousel2Itens: HotelImages = [];

  phasehotel: string = '{{frase de imacto do hotel}}';
  primeImgHotel: string = 'img {{destaque}}';
  linkIgHotel: string = '{{link do instagram}}'

  textDescription: string = '{{texto adicional opcional}}';
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
