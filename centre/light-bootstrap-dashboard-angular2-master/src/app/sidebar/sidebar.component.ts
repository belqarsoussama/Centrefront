import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Info Generale',  icon: 'pe-7s-graph', class: '' },
    { path: '/user', title: 'Mon Profile',  icon:'pe-7s-id', class: '' },
    { path: '/table', title: 'Seances',  icon:'pe-7s-note2', class: '' },
    { path: '/typography', title: 'Formations',  icon:'pe-7s-study', class: '' },
   { path: '/icons', title: 'Ajouter Local',  icon:'pe-7s-map-marker', class: '' },
    //{ path: '/maps', title: 'Ajouter Seance',  icon:'pe-7s-upload', class: '' },
    //{ path: '/notifications', title: 'Ajouter formation',  icon:'pe-7s-upload', class: '' },
    //{ path: '/upgrade', title: 'Admin',  icon:'pe-7s-user', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
