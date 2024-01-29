import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
  data1 = [
    {NOMLOCAL: 'acesse_centre', PLACES: 30, 'description': 'Description iciDescription iciDescription iciDescription ici', PRIX: 150},
    {NOMLOCAL: 'autre_centre', PLACES: 25, 'description': 'Autre description iciAutre description iciAutre description ici', PRIX: 120},
    {NOMLOCAL: 'nouveau_centre', PLACES: 40, 'description': 'Nouvelle description iciNouvelle description iciNouvelle description ici', PRIX: 200},
    {NOMLOCAL: 'centre_quatre', PLACES: 35, 'description': 'Quatrième description iciQuatrième description iciQuatrième description ici', PRIX: 180},
    {NOMLOCAL: 'centre_cinq', PLACES: 28, 'description': 'Cinquième description iciCinquième description iciCinquième description ici', PRIX: 170},
    {NOMLOCAL: 'dernier_centre', PLACES: 50, 'description': 'Dernière description iciDernière description iciDernière description ici', PRIX: 250}
  ]
  constructor() { }

  ngOnInit() {
  }

}
