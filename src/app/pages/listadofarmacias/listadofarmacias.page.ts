import { Component, OnInit } from '@angular/core';
import { Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-listadofarmacias',
  templateUrl: './listadofarmacias.page.html',
  styleUrls: ['./listadofarmacias.page.scss'],
})
export class ListadofarmaciasPage implements OnInit {
  public appPages = [
    { title: 'Farmacia Simi', label:'a 900m de distancia', icon: 'location' },
    { title: 'Los Orientales', label:'a 800m de distancia', icon: 'location' },
    { title: 'Farmacia Gama', label:'a 1km de distancia', icon: 'location' },
    { title: 'Farmacia Knop', label:'a 250m de distancia', icon: 'location' },
    { title: 'La Esquina', label:'a 1,2km de distancia', icon: 'location' },
    { title: 'Panonia', label:'a 300m de distancia', icon: 'location' },
    { title: 'Bio Plus', label:'a 870m de distancia', icon:'location'},
    {title: 'San Clemente',label:'a 340m de distancia', icon:'location'},
    {title: 'La Esperanza', label:'a 789m de distancia', icon:'location'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
