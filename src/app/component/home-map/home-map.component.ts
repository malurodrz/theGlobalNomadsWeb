import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import {Feature} from 'ol';
import {Icon, Style} from 'ol/style';
import {Point} from 'ol/geom';
import Overlay from 'ol/Overlay'; // Import importante para o tooltip

@Component({
  selector: 'app-home-map',
  standalone: false,

  templateUrl: './home-map.component.html',
  styleUrl: './home-map.component.scss'
})
export class HomeMapComponent {
  @ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef;
  @ViewChild('tooltipRef', { static: true }) tooltipRef!: ElementRef;

  map!: Map;

  ngOnInit(): void {
    this.initMap();
  }

  initMap(): void {
    // Coordenadas dos pontos (substitua pelas suas coordenadas)
    const locations = [
      { lon: 39.9208, lat: 32.8541, name: 'Ankara, Turquia' },
      { lon: 41.0082, lat: 28.9784, name: 'Istambul, Turquia' },
      { lon: 37.9838, lat: 23.7275, name: 'Atenas, Grécia' },
      { lon: 34.8544, lat: 39.3999, name: 'Beirute, Líbano' },
      { lon: 38.969, lat: 45.048, name: 'Baku, Azerbaijão' }
    ];

    // Cria as features
    const features = locations.map((loc) => {
      const feature = new Feature({
        geometry: new Point(fromLonLat([loc.lon, loc.lat])),
        name: loc.name,
      });
      feature.setStyle(
        new Style({
          image: new Icon({
            src: 'assets/img/point.svg', // Ícone personalizado
            anchor: [0.5, 1],
            scale: 0.5,
          }),
        })
      );
      return feature;
    });

    // Fonte vetorial contendo os marcadores
    const vectorSource = new VectorSource({
      features: features,
    });

    // Camada vetorial para exibir os pontos
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    // Instancia o mapa
    this.map = new Map({
      target: this.mapContainer.nativeElement, // Elemento DOM para o mapa
      layers: [
        new TileLayer({
          source: new OSM(), // OpenStreetMap
        }),
        vectorLayer, // Adiciona os pontos ao mapa
      ],
      view: new View({
        center: fromLonLat([locations[0].lon, locations[0].lat]), // Centro inicial
        zoom: 4, // Zoom inicial
      }),
      controls: [], // Remove os controles padrão
    });

    // -----------------------------------------------------------------------
    // CRIAÇÃO E CONFIGURAÇÃO DO TOOLTIP USANDO Overlay
    // -----------------------------------------------------------------------
    const tooltipElement = this.tooltipRef.nativeElement;

    // Cria Overlay para posicionar o tooltip no mapa
    const tooltipOverlay = new Overlay({
      element: tooltipElement,
      offset: [10, 0], // "empurra" um pouco o tooltip para a direita
      positioning: 'bottom-left'
    });

    // Adiciona o overlay ao mapa
    this.map.addOverlay(tooltipOverlay);

    // Evento pointermove para detectar a feature sob o cursor
    this.map.on('pointermove', (event) => {
      // Verifica se há alguma feature embaixo do cursor
      const feature = this.map.forEachFeatureAtPixel(event.pixel, (feat) => feat);

      if (feature) {
        tooltipElement.innerHTML = feature.get('name') || 'Sem nome';
        tooltipElement.style.display = 'block';
        // Posiciona o overlay exatamente na coordenada do mouse
        tooltipOverlay.setPosition(event.coordinate);
      } else {
        tooltipElement.style.display = 'none';
      }
    });
  }
}
