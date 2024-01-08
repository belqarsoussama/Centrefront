import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
  visible = true;
  data = [
    { categorie: 'Informatique', description: 'Description iciDescription iciDescription iciDescription ici', valeur: 100 },
    // Ajoutez d'autres entrées de données selon vos besoins
  ];
  data1 = [
    { imgSrc: '../../assets/img/faces/java.png', name: 'JAVA V2', category: 'Informatique', description: 'Description ici Description ici Description ici Description ici', value: 150 },
    // Ajoutez d'autres entrées de données selon vos besoins
  ];

  constructor() { }

  ngOnInit() {
  }

  seancelieer() {
    this.visible = false ;
  }

  back() {
    this.visible = true ;
  }

  confirmReservation() {
    const isConfirmed = window.confirm('Êtes-vous sûr de réserver la séance ?');
    if (isConfirmed) {
      // Ajoutez ici la logique à exécuter si la réservation est confirmée
      alert('La séance a été réservée avec succès.');
    } else {
      // Ajoutez ici la logique à exécuter si la réservation est annulée
      alert('La réservation de la séance a été annulée.');
    }
  }
}
