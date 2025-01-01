import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() title: string = 'Curadoria de hoteis';
  @Input() subtitle: string = "A melhor coleção de luxo ao redor do mundo";
  @Input() showbutton: boolean = true;
  @Output() selectedTab = new EventEmitter<string>();
  activeTab: string = 'map';

  changeTab(tab: string) {
    this.activeTab = tab;
    this.selectedTab.emit(tab);
  }
}
