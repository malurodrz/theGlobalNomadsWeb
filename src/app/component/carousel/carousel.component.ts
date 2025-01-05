import {Component, Input} from '@angular/core';

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
export class CarouselComponent {
  @Input() hotels: Hotel[] = [];
  @Input() title: string = '';
}
