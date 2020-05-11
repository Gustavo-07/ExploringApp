import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import * as Mapboxgl from 'mapbox-gl';

declare var google;
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  mapa: Mapboxgl.Map;

  ngOnInit() {
    Mapboxgl.accessToken = environment.mapboxkey;
    this.mapa = new Mapboxgl.Map({
    container: 'mapa', // container id
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-73.2582494, 10.464506], // starting position
    zoom: 15 // starting zoom
    });
// Add zoom and rotation controls to the map.
  }
}
