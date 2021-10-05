import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
  public appPages = [
    { title: 'Perfil', url: '/folder/Inbox', icon: 'person' },
    { title: 'Mensajes', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Buscar Farmacia', url: '/folder/Favorites', icon: 'heart' },
    
  ];
  public labels = ['Cerrar Sesión'];
  constructor() { }

  ngOnInit() {
  }

}
