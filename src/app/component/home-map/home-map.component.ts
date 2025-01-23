import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import {Feature, Overlay} from 'ol';
import {Fill, Icon, Stroke, Style, Text} from 'ol/style';
import {Point} from 'ol/geom';

@Component({
  selector: 'app-home-map',
  standalone: false,

  templateUrl: './home-map.component.html',
  styleUrl: './home-map.component.scss'
})
export class HomeMapComponent implements OnInit {
  @ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef;
  @ViewChild('tooltipRef', { static: true }) tooltipRef!: ElementRef;

  map!: Map;
  tooltipOverlay!: Overlay;

  ngOnInit(): void {
    this.initMap();
  }

  initMap(): void {
    const locations = [
      { lon: 39.9208, lat: 32.8541, name: 'Ankara', city: 'Turquia', country: 'Espanha' },
      { lon: 41.0082, lat: 28.9784, name: 'Istambul', city: 'Turquia', country: 'Espanha' },
      { lon: 37.9838, lat: 23.7275, name: 'Atenas', city: 'Grécia', country: 'Espanha' },
      { lon: 34.8544, lat: 39.3999, name: 'Beirute', city: 'Líbano', country: 'Espanha' },
      { lon: 38.969, lat: 45.048, name: 'Baku', city: 'Azerbaijão', country: 'Espanha' },
    ];

    const features = locations.map((loc) => {
      const feature = new Feature({
        geometry: new Point(fromLonLat([loc.lon, loc.lat])),
        name: loc.name,
        city: loc.city,
        country: loc.country,
      });

      feature.setStyle(
        new Style({
          image: new Icon({
            src: 'assets/img/point.svg', // Ícone personalizado
            anchor: [0.5, 1],
            scale: 0.5,
          }),
        }),
      );

      return feature;
    });

    const vectorSource = new VectorSource({
      features: features,
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    // Criação do mapa
    this.map = new Map({
      target: this.mapContainer.nativeElement,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        vectorLayer,
      ],
      view: new View({
        center: fromLonLat([locations[0].lon, locations[0].lat]),
        zoom: 4,
      }),
      controls: [],
    });

    // Configuração do tooltip
    const tooltipElement = document.createElement('div');
    tooltipElement.className = 'custom-tooltip';
    this.tooltipOverlay = new Overlay({
      element: tooltipElement,
      offset: [15, 15], // Offset para posicionar o tooltip
      positioning: 'bottom-left',
    });
    this.map.addOverlay(this.tooltipOverlay);

    // Adiciona evento para exibir o tooltip
    this.map.on('pointermove', (event) => {
      const feature = this.map.forEachFeatureAtPixel(event.pixel, (feat) => feat);

      if (feature) {
        const name = feature.get('name');
        const city = feature.get('city');
        const country = feature.get('country');
        tooltipElement.innerHTML = `
            <div class="card" style="display: flex; justify-content: space-between; align-items: center; border-left: 6px solid #00c4cc;
            border-radius: 8px; padding: 16px; background-color: #fff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                <div class="text" style="display: flex; flex-direction: column;">
                  <h1 style="font-size: 18px; margin: 0; color: #000;">${name}</h1>
                  <p style="font-size: 14px; margin: 4px 0 0 0; color: #00c4cc;">${city}, ${country}</p>
                </div>
            </div>
        `;
        this.tooltipOverlay.setPosition(event.coordinate);
        tooltipElement.style.display = 'block';
      } else {
        tooltipElement.style.display = 'none';
      }
    });
  }
}
